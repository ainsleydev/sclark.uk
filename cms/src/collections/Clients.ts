import type {CollectionConfig} from 'payload'
import {validateURL} from '@ainsleydev/payload-helper/src/util/validation';

export const Clients: CollectionConfig = {
	slug: 'clients',
	labels: {
		singular: 'Client',
		plural: 'Clients',
	},
	admin: {
		useAsTitle: 'name',
		defaultColumns: [
			'name',
			'url',
		],
	},
	fields: [
		{
			name: 'name',
			label: 'Name',
			type: 'text',
			required: true,
			admin: {
				description: 'The name of the client or company.',
			}
		},
		{
			name: 'url',
			label: 'Website',
			type: 'text',
			required: true,
			validate: validateURL,
			description: {
				name: 'The website of the client or company.',
			},
		},
		{
			name: 'logo',
			type: 'upload',
			relationTo: 'media',
			required: true,
			filterOptions: {
				mimeType: {
					contains: 'image',
				},
			},
			admin: {
				description: 'Attach a logo of the client or company, this should be black in SVG format.',
			},
		},
	],
}
