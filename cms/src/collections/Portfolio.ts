import type { CollectionConfig } from 'payload';
import { validateURL } from '@ainsleydev/payload-helper/src/util/validation';

export const Portfolio: CollectionConfig = {
	slug: 'portfolio',
	labels: {
		singular: 'Portfolio Item',
		plural: 'Portfolio',
	},
	admin: {
		useAsTitle: 'title',
		defaultColumns: ['title', 'company', 'category', 'date'],
	},
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: 'text',
			required: true,
			admin: {
				description: 'The title of this project or blog post.',
			},
		},
		{
			type: 'row',
			fields: [
				{
					name: 'url',
					label: 'Link',
					type: 'text',
					required: true,
					validate: validateURL,
					admin: {
						width: '50%',
						description: 'The URL of this project or blog post.',
					},
				},
				{
					name: 'date',
					label: 'Date',
					type: 'date',
					required: true,
					admin: {
						width: '50%',
						description: 'The date this project or blog post was published on.',
					},
				},
			],
		},
		{
			type: 'row',
			fields: [
				{
					name: 'company',
					label: 'Company',
					type: 'relationship',
					relationTo: 'clients',
					required: true,
					admin: {
						width: '50%',
						description:
							'Attach a company to the portfolio item, that the project was completed for.',
					},
				},
				{
					name: 'category',
					label: 'Category',
					type: 'relationship',
					relationTo: 'portfolio-categories',
					hasMany: false,
					admin: {
						width: '50%',
						allowCreate: true,
						description: 'Select a category for this portfolio item.',
					},
				},
			],
		},
		{
			name: 'image',
			label: 'Image',
			type: 'upload',
			relationTo: 'media',
			required: true,
			admin: {
				description: 'Attach a main image for the portfolio item.',
			},
		},
	],
};
