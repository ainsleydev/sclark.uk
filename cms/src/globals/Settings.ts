import type { Tab } from 'payload';

export const Footer: Tab = {
	label: 'Footer',
	description: 'Configure the footer settings for the website.',
	fields: [
		{
			name: 'footer',
			type: 'group',
			fields: [
				{
					name: 'title',
					type: 'text',
					label: 'Footer Title',
				},
				{
					name: 'content',
					type: 'textarea',
					label: 'Footer Content',
				},
			],
		},
	],
};
