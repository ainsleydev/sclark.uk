// @ts-ignore
import { validateURL } from '@ainsleydev/payload-helper/dist/util/validation';
import type { Block } from 'payload';

export const Logos: Block = {
	slug: 'logos-block',
	interfaceName: 'BlockLogs',
	labels: {
		singular: 'Logo',
		plural: 'Logos',
	},
	fields: [
		{
			type: 'row',
			fields: [
				{
					name: 'title',
					label: 'Title',
					type: 'text',
					required: true,
					admin: {
						width: '50%',
						description: 'Add a title that will be displayed above the logos.',
					},
				},
				{
					name: 'greyscale',
					label: 'Greyscale',
					type: 'checkbox',
					required: false,
					admin: {
						width: '50%',
						description: 'Check this box to display the logos in greyscale.',
					},
				},
			],
		},
		{
			name: 'clients',
			label: 'Clients',
			type: 'relationship',
			relationTo: 'clients',
			hasMany: true,
			admin: {
				description: 'Add client logos that that will appear in the block',
			}
		}
	],
};
