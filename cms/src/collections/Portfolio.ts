import type {CollectionConfig} from 'payload'

export const Portfolio: CollectionConfig = {
	slug: 'TODO',
	labels: {
		singular: 'Testimonial',
		plural: 'Testimonials',
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
