import type { Block } from 'payload';
import { IdentifierField } from '@/fields/Identifier';

export const Portfolio: Block = {
	slug: 'portfolio-block',
	interfaceName: 'BlockPortfolio',
	labels: {
		singular: 'Portfolio',
		plural: 'Portfolio',
	},
	fields: [
		IdentifierField,
		{
			name: 'title',
			type: 'text',
			label: 'Title',
			required: true,
			admin: {
				description: 'Add a title for the portfolio block.',
			},
		},
		{
			name: 'content',
			type: 'textarea',
			label: 'Content',
			admin: {
				description: 'Add a content for the portfolio block.',
			},
		},
		{
			type: 'relationship',
			name: 'items',
			label: 'Portfolio',
			relationTo: 'portfolio',
			hasMany: true,
			admin: {
				isSortable: true,
				allowCreate: false,
			},
		},
	],
};
