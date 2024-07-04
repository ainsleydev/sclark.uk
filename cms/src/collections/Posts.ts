import type { CollectionConfig, PayloadHandler } from "payload";
import { findBySlug } from "@ainsleydev/payload-helper/src/endpoints/slug";

export const Posts: CollectionConfig = {
	slug: "posts",
	timestamps: true,
	labels: {
		singular: "Post",
		plural: "Posts",
	},
	versions: {
		drafts: true,
		maxPerDoc: 5,
	},
	admin: {
		useAsTitle: "title",
		defaultColumns: ["title"],
	},
	endpoints: [
		{
			path: "/posts/slug/:slug",
			method: "get",
			handler: findBySlug("posts") as PayloadHandler,
		},
	],
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Content",
					fields: [
						{
							name: "title",
							label: "Title",
							type: "text",
							required: true,
						},
						{
							name: "excerpt",
							label: "Excerpt",
							type: "textarea",
						},
						{
							name: "content",
							label: "Content",
							type: "richText",
						},
						{
							name: "thumbnail",
							label: "Thumbnail",
							type: "upload",
							relationTo: "media",
						},
					],
				},
			],
		},
		{
			name: "publishedAt",
			type: "date",
			admin: {
				position: "sidebar",
				date: {
					pickerAppearance: "dayAndTime",
				},
			},
			hooks: {
				beforeChange: [
					({ siblingData, value }) => {
						if (siblingData._status === "published" && !value) {
							return new Date();
						}
						return value;
					},
				],
			},
		},
		{
			name: "relatedPosts",
			type: "relationship",
			relationTo: "posts",
			hasMany: true,
			admin: {
				position: "sidebar",
			},
			filterOptions: ({ id }) => {
				return {
					id: {
						not_in: [id],
					},
				};
			},
		},
		{
			name: "tags",
			label: "Tags",
			type: "array",
			admin: {
				position: "sidebar",
			},
			labels: {
				singular: "Tag",
				plural: "Tags",
			},
			fields: [
				{
					name: "tag",
					type: "text",
				},
			],
		},
	],
};
