// storage-adapter-import-placeholder
import {postgresAdapter} from '@payloadcms/db-postgres'
import {lexicalEditor} from '@payloadcms/richtext-lexical'
import path from 'path'
import {buildConfig} from 'payload'
import {fileURLToPath} from 'url'
import sharp from 'sharp'

import type {Config} from 'payload';
import {Users} from './collections/Users'
import {Media} from '@ainsleydev/payload-helper/src/collections/Media'
import {Redirects} from '@ainsleydev/payload-helper/src/collections/Redirects';
import {Settings} from '@ainsleydev/payload-helper/src/globals/Settings';
import {Navigation} from '@ainsleydev/payload-helper/src/globals/Navigation';
import env from '@ainsleydev/payload-helper/src/util/env';

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
	admin: {
		user: Users.slug,
	},
	collections: [
		Media(path.resolve(dirname, 'media')),
		Users,
		Redirects(),
	],
	globals: [
		Settings(),
		Navigation({
			includeFooter: false,
			header: {
				maxDepth: 1,
			},
		}),
	],
	editor: lexicalEditor(),
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
		// storage-adapter-placeholder
	],
} as Config);
