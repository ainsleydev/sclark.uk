import path from "node:path";
import { fileURLToPath } from "node:url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import type { Config, Field } from "payload";
import sharp from "sharp";

import { Clients } from "./collections/Clients";
import { Pages } from "./collections/Pages";
import { Portfolio } from "./collections/Portfolio";
import { PortfolioCategories } from "./collections/PortfolioCategories";
import { Posts } from "./collections/Posts";
import { Reviews } from "./collections/Reviews";
import { Users } from "./collections/Users";
import { Footer } from "./globals/Settings";

import { Media } from "@ainsleydev/payload-helper/src/collections/Media";
import { Redirects } from "@ainsleydev/payload-helper/src/collections/Redirects";
import { SEOFields } from "@ainsleydev/payload-helper/src/common/SEO";
import { Navigation } from "@ainsleydev/payload-helper/src/globals/Navigation";
import { Settings } from "@ainsleydev/payload-helper/src/globals/Settings";
import env from "@ainsleydev/payload-helper/src/util/env";

import { cloudStoragePlugin } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import { formBuilderPlugin } from "@payloadcms/plugin-form-builder";
import { seoPlugin } from "@payloadcms/plugin-seo";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
	},
	collections: [
		Posts,
		Pages,
		Clients,
		Reviews,
		Portfolio,
		PortfolioCategories,
		Media(lexicalEditor),
		Users,
		Redirects(),
	],
	globals: [
		Settings([Footer]),
		Navigation({
			includeFooter: false,
			header: {
				maxDepth: 1,
			},
		}),
	],
	editor: lexicalEditor({
		admin: {
			hideGutter: false,
		},
	}),
	secret: env("PAYLOAD_SECRET", ""),
	typescript: {
		outputFile: path.resolve(dirname, "./types/payload.ts"),
		schema: [
			({ jsonSchema }) => {
				if (!jsonSchema.properties) {
					jsonSchema.properties = {};
				}
				// biome-ignore lint/performance/noDelete: <explanation>
				delete jsonSchema.properties.auth;
				return jsonSchema;
			},
			({ jsonSchema }) => {
				const genGoLang = env.bool("GEN_GOLANG", false);
				if (!genGoLang) {
					return jsonSchema;
				}

				if (!jsonSchema.definitions) {
					jsonSchema.definitions = {};
				}

			    jsonSchema.definitions.settings = {
					type: 'object',
					additionalProperties: false,
					fields: [],
					goJSONSchema: {
						imports: [
							"github.com/ainsleydev/webkit/pkg/adapters/payload"
						],
						nillable: false,
						type: "payload.Settings",
					}
				}

				jsonSchema.definitions.media = {
					type: 'object',
					additionalProperties: false,
					goJSONSchema: {
						imports: [
							"github.com/ainsleydev/webkit/pkg/adapters/payload"
						],
						nillable: false,
						type: "payload.Media",
					}
				}

				return jsonSchema;
			},
		],
	},
	db: postgresAdapter({
		pool: {
			connectionString: env("DATABASE_URI", "default")
				.toString()
				.replace("sslmode=require", "sslmode=no-verify"),
		},
	}),
	sharp,
	plugins: [
		(incomingConfig: Config): Config => {
			const genGoLang = env.bool("GEN_GOLANG", false);
			if (!genGoLang) {
				return incomingConfig;
			}

			const config = incomingConfig;

			const mapper = (field: Field): Field => {
				console.log(field.type, field.name, field.fields?.map((f) => f.name));
				switch (field.type) {
					case 'blocks':
						field.typescriptSchema = [
							() => ({
								goJSONSchema: {
									imports: [
										"github.com/ainsleydev/webkit/pkg/adapters/payload"
									],
									nillable: false,
									type: "payload.Blocks",
								}
							}),
						];
						break;
					case 'richText':
						field.typescriptSchema = [
							() => ({
								type: 'string',
								goJSONSchema: {
									imports: [
										"github.com/ainsleydev/webkit/pkg/adapters/payload"
									],
									nillable: false,
									type: "payload.RichText",
								}
							}),
						];
						break;
					case 'tabs': {
						field.tabs.forEach((tab) => {
							tab.fields = tab.fields.map((f) => mapper(f));
						});
						break;
					}
					case 'array':
					case 'row':
					case 'collapsible': {
						field.fields = field.fields.map((f) => mapper(f));
					}
				}

				return field;
			}

			if (config.collections) {
				config.collections.forEach((collection) => {
					collection.fields = collection.fields.map((field) => mapper(field));
				})
			}

			return incomingConfig;
		},
		seoPlugin({
			collections: ["posts"],
			globals: ["settings"],
			fields: SEOFields as Field[],
			interfaceName: "Meta",
			tabbedUI: true,
			uploadsCollection: "media",
			// @ts-ignore
			generateTitle: ({ doc, locale }) => `Website.com — ${doc?.title?.value ?? ""}`,
			// @ts-ignore
			generateDescription: ({ doc }) => doc?.excerpt?.value,
		}),
		formBuilderPlugin({
			formOverrides: {
				fields: ({ defaultFields }) => {
					const filteredFields = defaultFields.filter(
						// @ts-ignore
						(field) => field.name !== "confirmationMessage" && field.name !== "confirmationType",
					);
					return [
						...filteredFields,
						{
							name: "confirmationMessage",
							type: "textarea",
						},
					];
				},
				admin: {
					group: "Forms",
				},
			},
			formSubmissionOverrides: {
				fields: ({ defaultFields }) => {
					return [...defaultFields];
				},
				admin: {
					group: "Forms",
				},
			},
			fields: {
				text: true,
				textarea: true,
				select: true,
				email: true,
				state: true,
				country: true,
				checkbox: true,
				number: true,
				message: true,
				payment: false,
			},
		}),
		cloudStoragePlugin({
			enabled: env.isProduction,
			collections: {
				media: {
					adapter: s3Adapter({
						bucket: env("DO_SPACES_BUCKET"),
						acl: "public-read",
						config: {
							region: "ams3",
							endpoint: "https://ams3.digitaloceanspaces.com",
							credentials: {
								accessKeyId: env("DO_SPACES_ACCESS_KEY"),
								secretAccessKey: env("DO_SPACES_SECRET_KEY"),
							},
						},
					}),
				},
			},
		}),
	],
} as Config);
