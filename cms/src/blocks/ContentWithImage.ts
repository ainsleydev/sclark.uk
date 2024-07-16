import type { Block } from "payload";
import { FAQs } from "@/blocks/FAQs";
import { RichText } from "@/blocks/Richtext";

export const ContentWithImage: Block = {
	slug: "content-with-image-block",
	interfaceName: "BlockContentWithImage",
	labels: {
		singular: "Content With Image",
		plural: "Content With Image",
	},
	fields: [
		{
			name: "textLayout",
			type: "blocks",
			required: true,
			blocks: [RichText, FAQs],
		},
		{
			type: "row",
			fields: [
				{
					name: "imagePosition",
					label: "Image Position",
					type: "select",
					required: true,
					defaultValue: "left",
					options: [
						{
							label: "Left",
							value: "left",
						},
						{
							label: "Right",
							value: "right",
						},
					],
					admin: {
						width: "50%",
						description: "Select the position of the image.",
					},
				},
				{
					name: "sticky",
					label: "Sticky Image",
					type: "checkbox",
					defaultValue: false,
					admin: {
						width: "50%",
						description:
							"Check this to make the image sticky, which will make it stick to the top of the screen when scrolling.",
					},
				},
			],
		},
		{
			name: "image",
			label: "Image",
			type: "upload",
			relationTo: "media",
			required: true,
			admin: {
				description: "Attach an image for the block.",
			},
		},
	],
};
