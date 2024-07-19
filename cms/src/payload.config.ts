import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import type { Config, Field } from 'payload';
import sharp from 'sharp';

import { Clients } from './collections/Clients';
import { Pages } from './collections/Pages';
import { Portfolio } from './collections/Portfolio';
import { PortfolioCategories } from './collections/PortfolioCategories';
import { Posts } from './collections/Posts';
import { Reviews } from './collections/Reviews';
import { Users } from './collections/Users';
import { Footer } from './globals/Settings';

import { Media } from '@ainsleydev/payload-helper/src/collections/Media';
import { Redirects } from '@ainsleydev/payload-helper/src/collections/Redirects';
import { SEOFields } from '@ainsleydev/payload-helper/src/common/SEO';
import { Navigation } from '@ainsleydev/payload-helper/src/globals/Navigation';
import { Settings } from '@ainsleydev/payload-helper/src/globals/Settings';
import env from '@ainsleydev/payload-helper/src/util/env';

import { payloadHelper } from '@ainsleydev/payload-helper';

import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder';
import { seoPlugin } from '@payloadcms/plugin-seo';
import { fieldAffectsData, fieldIsBlockType } from 'payload/shared';

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
		//@ts-ignore
		Settings([Footer]),
		// Settings(),
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
	secret: env('PAYLOAD_SECRET', ''),
	db: postgresAdapter({
		pool: {
			connectionString: env('DATABASE_URI', 'default')
				.toString()
				.replace('sslmode=require', 'sslmode=no-verify'),
		},
	}),
	sharp,
	plugins: [
		seoPlugin({
			collections: ['posts'],
			globals: ['settings'],
			fields: SEOFields as Field[],
			tabbedUI: true,
			uploadsCollection: 'media',
			generateTitle: ({ doc, locale }) => `Website.com — ${doc?.title?.value ?? ''}`,
			generateDescription: ({ doc }) => doc?.excerpt?.value,
		}),
		formBuilderPlugin({
			formOverrides: {
				admin: {
					group: 'Forms',
				},
				fields: ({ defaultFields }) => {
					const includeWidth = false;

					const filteredFields = defaultFields.filter((field) => {
						if (!fieldAffectsData(field)) return;
						return (
							field.name !== 'confirmationMessage' &&
							field.name !== 'confirmationType'
						);
					});

					// TODO: Also need to make Label required.
					defaultFields.forEach((field) => {
						if (!fieldIsBlockType(field)) return;
						if (field.name === 'fields') {
							field.blocks.forEach((block) => {
								block.fields.forEach((blockField) => {
									// console.log(blockField)
								});
							});
						}
					});

					return [
						{
							name: 'heading',
							type: 'text',
							label: 'Heading',
							required: true,
							admin: {
								description:
									'Add a heading for the form that will appear within the form.',
							},
						},
						{
							name: 'content',
							type: 'textarea',
							label: 'Content',
							admin: {
								description:
									'Add content for the form that will appear above the fields.',
							},
						},
						...filteredFields,
						{
							name: 'confirmationMessage',
							type: 'textarea',
						},
					];
				},
			},
			formSubmissionOverrides: {
				admin: {
					group: 'Forms',
				},
				fields: ({ defaultFields }) => {
					return [...defaultFields];
				},
			},
			fields: {
				text: true,
				textarea: true,
				select: false,
				email: true,
				state: false,
				country: false,
				checkbox: false,
				number: false,
				message: false,
				payment: false,
			},
		}),
		cloudStoragePlugin({
			enabled: env.isProduction,
			collections: {
				media: {
					adapter: s3Adapter({
						bucket: env('DO_SPACES_BUCKET', ''),
						acl: 'public-read',
						config: {
							region: 'ams3',
							endpoint: 'https://ams3.digitaloceanspaces.com',
							credentials: {
								accessKeyId: env('DO_SPACES_ACCESS_KEY', ''),
								secretAccessKey: env('DO_SPACES_SECRET_KEY', ''),
							},
						},
					}),
				},
			},
		}),
		payloadHelper({}),
	],
} as Config);
