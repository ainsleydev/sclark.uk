import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';
import type { Block } from 'payload';
import { IdentifierField } from '@/fields/Identifier';

export const Content: Block = {
	slug: 'content-block',
	interfaceName: 'BlockContentDefault',
	labels: {
		singular: 'Content',
		plural: 'Content',
	},
	fields: [
		IdentifierField,
		{
			type: 'row',
			fields: [
				{
					name: 'style',
					label: 'Style',
					type: 'select',
					required: true,
					defaultValue: 'centered',
					options: [
						{
							label: 'Centered',
							value: 'centered',
						},
						{
							label: 'Spread',
							value: 'spread',
						},
					],
					admin: {
						width: '50%',
						description: 'Select how the text should display.',
					},
				},
				{
					name: 'centreAlign',
					label: 'Centre Align',
					type: 'checkbox',
					defaultValue: false,
					admin: {
						width: '50%',
						description: 'Check this box to align the text to the centre.',
					},
				},
			],
		},
		{
			name: 'content',
			label: 'Content',
			type: 'richText',
			required: true,
			editor: lexicalEditor({
				features: ({ defaultFeatures }) => [
					...defaultFeatures,
					// The HTMLConverter Feature is the feature which manages the HTML serializers.
					// If you do not pass any arguments to it, it will use the default serializers.
					HTMLConverterFeature({}),
				],
			}),
		},
		lexicalHTML('content', {
			name: 'contentHtml',
		}),
	],
};
