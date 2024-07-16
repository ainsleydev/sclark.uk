import type { Block } from "payload";
import {
	HTMLConverterFeature,
	lexicalEditor,
	lexicalHTML
} from '@payloadcms/richtext-lexical'

export const RichText: Block = {
	slug: "content-block",
	interfaceName: "BlockContent",
	labels: {
		singular: "Content",
		plural: "Content",
	},
	fields: [
		{
			name: "content",
			label: "Content",
			type: "richText",
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
