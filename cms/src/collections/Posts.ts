import type {CollectionConfig} from 'payload'

export const Posts: CollectionConfig = {
	slug: 'posts',
	labels: {
		singular: 'Post',
		plural: 'Posts',
	},
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: 'text',
			required: true,
		},
	],
}
