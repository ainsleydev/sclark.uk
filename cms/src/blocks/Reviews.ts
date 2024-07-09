import type { Block } from "payload";

export const Reviews: Block = {
	slug: "reviews-block",
	interfaceName: "BlockReviews",
	labels: {
		singular: "Testimonial",
		plural: "Testimonials",
	},
	fields: [
		{
			name: "title",
			type: "text",
			label: "Title",
			admin: {
				description: "Add a title for the testimonial block.",
			},
		},
		{
			name: "content",
			type: "textarea",
			label: "Content",
			admin: {
				description: "Add a content for the testimonial block.",
			},
		},
		{
			type: "relationship",
			name: "items",
			label: "Reviews",
			relationTo: "reviews",
			hasMany: true,
			admin: {
				isSortable: true,
				allowCreate: false,
			},
		},
	],
};
