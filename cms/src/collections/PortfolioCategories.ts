import type { CollectionConfig } from 'payload';

export const PortfolioCategories: CollectionConfig = {
	slug: 'portfolio-categories',
	labels: {
		singular: 'Portfolio Category',
		plural: 'Portfolio Categories',
	},
	admin: {
		useAsTitle: 'title',
		defaultColumns: ['title'],
	},
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: 'text',
			required: true,
			admin: {
				description:
					'Add a title for the category, this can be a single word or a short phrase such as Tech or Education. ' +
					'Used to associate portfolio items with this category.',
			},
		},
	],
};
