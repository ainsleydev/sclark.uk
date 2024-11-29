import type { Block } from 'payload';
import { IdentifierField } from '@/fields/Identifier';

export const Gradient: Block = {
	slug: 'gradient-block',
	interfaceName: 'BlockGradient',
	labels: {
		singular: 'Gradient',
		plural: 'Gradients',
	},
	fields: [
		IdentifierField,
		{
			name: 'colour',
			label: 'Colour',
			type: 'select',
			required: true,
			defaultValue: 'pink',
			options: [
				{
					label: 'Pink',
					value: 'pink',
				},
				{
					label: 'Blue',
					value: 'blue',
				},
			],
			admin: {
				description: 'Select the style of the gradient.',
			},
		},
	],
};
