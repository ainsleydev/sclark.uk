import type { Block } from 'payload';

export const Gradient: Block = {
	slug: 'gradient-block',
	interfaceName: 'BlockGradient',
	labels: {
		singular: 'Gradient',
		plural: 'Gradients',
	},
	fields: [
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
