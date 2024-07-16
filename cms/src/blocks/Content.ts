import type { Block } from "payload";
import { FAQs } from "@/blocks/FAQs";
import { RichText } from "@/blocks/Richtext";
import {HTMLConverterFeature, lexicalEditor, lexicalHTML} from "@payloadcms/richtext-lexical";

export const Content: Block = {
	slug: "content-block",
	interfaceName: "BlockContentWithImage",
	labels: {
		singular: "Content With Image",
		plural: "Content With Image",
	},
	fields: [
		{
			type: "row",
			fields: [
				{
					name: "style",
					label: "Style",
					type: "select",
					required: true,
					defaultValue: "centered",
					options: [
						{
							label: "Centered",
							value: "centered",
						},
						{
							label: "Stretch",
							value: "stretched",
						},
					],
					admin: {
						width: "50%",
						description: "Select how the text should display.",
					},
				},
				{
					name: "alignment",
					label: "Alignment",
					type: "checkbox",
					defaultValue: false,
					admin: {
						width: "50%",
						description: "Check this box to align the text to the right.",
					},
				},
			],
		},
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
