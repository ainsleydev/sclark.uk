import type { Tab } from "payload";

export const Footer: Tab = {
	label: "Footer",
	description: "Configure the footer settings for the website.",
	fields: [
		{
			name: "footer",
			type: "group",
			fields: [
				{
					name: "title",
					type: "text",
					label: "Title",
					admin: {
						description: 'Add a title for the footer area.'
					}
				},
				{
					name: "content",
					type: "textarea",
					label: "Content",
					admin: {
						description: 'Add content for the footer that will appear beneath the title.'
					}
				},
			],
		},
	],
};
