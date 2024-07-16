import type { Block } from "payload";

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
		},
	],
};
