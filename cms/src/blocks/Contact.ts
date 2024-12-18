import type { Block } from 'payload';
import { IdentifierField } from '@/fields/Identifier';

export const Contact: Block = {
	slug: 'contact-block',
	interfaceName: 'BlockContact',
	labels: {
		singular: 'Contact Form',
		plural: 'Contact Forms',
	},
	fields: [
		IdentifierField,
		{
			name: 'title',
			type: 'text',
			label: 'Title',
			required: true,
			admin: {
				description: 'Add a title for the form block.',
			},
		},
		{
			name: 'content',
			type: 'textarea',
			label: 'Content',
			admin: {
				description: 'Add a content for the form block.',
			},
		},
		{
			name: 'includeSocial',
			label: 'Include Social Links?',
			type: 'checkbox',
			defaultValue: true,
			admin: {
				description: 'Check this box to include social links in the form block.',
			},
		},
		{
			type: 'relationship',
			name: 'form',
			label: 'Form',
			relationTo: 'forms',
			required: true,
			hasMany: false,
			admin: {
				allowCreate: false,
			},
		},
	],
};
