import type { Block } from "payload";

export const FAQs: Block = {
	slug: "faqs-block",
	interfaceName: "BlockFAQs",
	labels: {
		singular: "FAQ",
		plural: "FAQs",
	},
	fields: [
		{
			name: "faqs",
			label: "FAQs",
			type: "array",
			fields: [
				{
					name: "question",
					type: "text",
					label: "Title",
					required: true,
					admin: {
						description: "Add a question for the FAQ item.",
					},
				},
				{
					name: "answer",
					type: "textarea",
					label: "Answer",
					required: true,
					admin: {
						description: "Add a content for the FAQ item.",
					},
				},
			],
		},
	],
};
