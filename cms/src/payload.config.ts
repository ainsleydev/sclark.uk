import {postgresAdapter} from '@payloadcms/db-postgres'
import {lexicalEditor} from '@payloadcms/richtext-lexical'
import path from 'path'
import {buildConfig} from 'payload'
import {fileURLToPath} from 'url'
import sharp from 'sharp'
import type {Config, Field} from 'payload';

import {Clients} from './collections/Clients'
import {Reviews} from './collections/Reviews';
import {Portfolio} from './collections/Portfolio';
import {PortfolioCategories} from './collections/PortfolioCategories'
import {Posts} from './collections/Posts';
import {Users} from './collections/Users'
import {Footer} from './globals/Settings'

import {Media} from '@ainsleydev/payload-helper/src/collections/Media'
import {Redirects} from '@ainsleydev/payload-helper/src/collections/Redirects'
import {Settings} from '@ainsleydev/payload-helper/src/globals/Settings'
import {Navigation} from '@ainsleydev/payload-helper/src/globals/Navigation'
import {SEOFields} from '@ainsleydev/payload-helper/src/common/SEO'
import env from '@ainsleydev/payload-helper/src/util/env'

import {seoPlugin} from '@payloadcms/plugin-seo'
import {formBuilderPlugin} from "@payloadcms/plugin-form-builder";
import {cloudStoragePlugin} from '@payloadcms/plugin-cloud-storage'
import {s3Adapter} from '@payloadcms/plugin-cloud-storage/s3'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
	admin: {
		user: Users.slug,
	},
	collections: [
		Posts,
		Clients,
		Reviews,
		Portfolio,
		PortfolioCategories,
		Media(path.resolve('../../'+dirname, 'media')),
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
	secret: env('PAYLOAD_SECRET', ''),
	typescript: {
		outputFile: path.resolve(dirname, 'payload-types.ts'),
	},
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
			collections: [
				'posts',
			],
			globals: [
				'settings'
			],
			fields: SEOFields as Field[],
			interfaceName: 'Meta',
			tabbedUI: true,
			uploadsCollection: 'media',
			// @ts-ignore
			generateTitle: ({doc, locale}) => `Website.com — ${doc?.title?.value ?? ''}`,
			// @ts-ignore
			generateDescription: ({doc}) => doc?.excerpt?.value,
		}),
		formBuilderPlugin({
			formOverrides: {
				fields: ({ defaultFields }) => {
					const filteredFields = defaultFields.filter(field => field['name'] !== 'confirmationMessage');
					return [
						...filteredFields,
						{
							name: 'confirmationMessage',
							type: 'textarea',
						},
					]
				},
				admin: {
					group: 'Forms',
				},
			},
			formSubmissionOverrides: {
				fields: ({ defaultFields }) => {
					return [
						...defaultFields,
					]
				},
				admin: {
					group: 'Forms',
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
			}
		}),
		cloudStoragePlugin({
			enabled: env.isProduction,
			collections: {
				'media': {
					adapter: s3Adapter({
						bucket: env('DO_SPACES_BUCKET'),
						acl: 'public-read',
						config: {
							region: 'ams3',
							endpoint: 'https://ams3.digitaloceanspaces.com',
							credentials: {
								accessKeyId: env('DO_SPACES_ACCESS_KEY'),
								secretAccessKey: env('DO_SPACES_SECRET_KEY'),
							},
						},
					}),
				},
			},
		})
	],
} as Config);
