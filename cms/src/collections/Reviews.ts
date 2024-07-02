import type {CollectionConfig} from 'payload'

export const Reviews: CollectionConfig = {
	slug: 'reviews',
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
		{
			name: 'author',
			type: 'group',
			required: true,
			fields: [
				{
					type: 'row',
					fields: [
						{
							name: 'firstName',
							label: 'First Name',
							type: 'text',
							required: true,
							admin: {
								width: '50%',
							}
						},
						{
							name: 'lastName',
							label: 'Last Name',
							type: 'text',
							required: true,
							admin: {
								width: '50%',
							}
						},
					],
				},
				{
					type: 'row',
					fields: [
						{
							name: 'company',
							label: 'Company',
							type: 'text',
							required: true,
							admin: {
								width: '50%',
							}
						},
						{
							name: 'jobTitle',
							label: 'Job Title',
							type: 'text',
							required: true,
							admin: {
								width: '50%',
							}
						},
					],
				},
			],
		},
		{
			name: 'content',
			label: 'Content',
			type: 'textarea',
			required: true,
		}
	],
}
