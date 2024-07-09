import type { CollectionConfig } from "payload";

export const Reviews: CollectionConfig = {
	slug: "reviews",
	labels: {
		singular: "Testimonial",
		plural: "Testimonials",
	},
	admin: {
		useAsTitle: "author.firstName",
		defaultColumns: ["title", "author.firstName", "author.lastName"],
	},
typescript: {
	interface: 'Review',
},
	fields: [
		{
			name: "content",
			label: "Content",
			type: "textarea",
			required: true,
			admin: {
				description: "The content of the review or testimonial.",
			},
		},
		{
			name: "author",
			type: "group",
			required: true,
			admin: {
				hideGutter: true,
			},
			fields: [
				{
					type: "row",
					fields: [
						{
							name: "firstName",
							label: "First Name",
							type: "text",
							required: true,
							admin: {
								width: "50%",
								description: "The first name of the author.",
							},
						},
						{
							name: "lastName",
							label: "Last Name",
							type: "text",
							required: true,
							admin: {
								width: "50%",
								description: "The last name of the author.",
							},
						},
					],
				},
				{
					name: "description",
					label: "Description",
					type: "text",
					required: true,
					admin: {
						description:
							"Give a brief description of the author, such as their role or position.",
					},
				},
			],
		},
	],
};
