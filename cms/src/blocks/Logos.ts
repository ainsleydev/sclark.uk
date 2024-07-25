import { validateURL } from '@ainsleydev/payload-helper/src/util/validation';
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
			name: 'logos',
			label: 'Logos',
			type: 'array',
			fields: [
				{
					name: 'link',
					label: 'Link',
					type: 'text',
					validate: validateURL,
					admin: {
						width: '50%',
						description: 'Add a link to the logo.',
					},
				},
				{
					name: 'logo',
					label: 'Logo',
					type: 'upload',
					relationTo: 'media',
					required: true,
					filterOptions: {
						mimeType: { contains: 'image' },
					},
				},
			],
		},
	],
};
