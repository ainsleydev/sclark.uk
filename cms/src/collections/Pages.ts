import { Contact } from '@/blocks/Contact';
import { Content } from '@/blocks/Content';
import { ContentWithImage } from '@/blocks/ContentWithImage';
import { Logos } from '@/blocks/Logos';
import { Portfolio } from '@/blocks/Portfolio';
// import {findBySlug} from 'adev-payload/src/endpoints/slug';
import { Reviews } from '@/blocks/Reviews';
import { SlugField } from '@nouance/payload-better-fields-plugin';
import type { CollectionConfig } from 'payload';
import {Gradient} from "@/blocks/Gradient";

export const Pages: CollectionConfig = {
	slug: 'pages',
	timestamps: true,
	labels: {
		singular: 'Page',
		plural: 'Pages',
	},
	versions: {
		drafts: true,
		maxPerDoc: 5,
	},
	endpoints: [
		// {
		// 	path: '/slug/:slug',
		// 	method: 'get',
		// 	handler: findBySlug('pages'),
		// },
		// {
		// 	path: '/home',
		// 	method: 'get',
		// 	handler: async (req, res) => {
		// 		try {
		// 			const data = await req.payload.find({
		// 				collection: 'pages',
		// 				limit: 1,
		// 				where: {
		// 					isHome: {
		// 						equals: true,
		// 					},
		// 				},
		// 			});
		// 			if (data.docs.length === 0) {
		// 				res.status(404).send({ error: 'not found' });
		// 			} else {
		// 				res.status(200).send(data.docs[0]);
		// 			}
		// 		} catch (error) {
		// 			console.error('Error occurred when fetching home page:', error);
		// 			res.status(500).send({ error: 'Internal server error' });
		// 		}
		// 	}
		// }
	],
	fields: [
		{
			type: 'tabs',
			tabs: [
				{
					label: 'Hero',
					fields: [
						{
							name: "hero",
							type: "group",
							label: 'Hero',
							admin: {
								hideGutter: true,
							},
							fields: [
								{
									name: 'title',
									label: 'Title',
									type: 'text',
									required: true,
									admin: {
										description: 'The main title of the page.',
									}
								},
								{
									name: 'lead',
									label: 'Lead',
									type: 'textarea',
									required: true,
									admin: {
										description: 'A short description that appears below the title.',
									}
								},
								{
									name: 'clients',
									label: 'Clients',
									type: 'relationship',
									relationTo: 'clients',
									hasMany: true,
									admin: {
										description: 'Add optional client logos that appear in the hero section beneath the title and lead.',
									}
								}
							]
						}
					],
				},
				{
					label: 'Content',
					fields: [
						{
							name: 'layout',
							type: 'blocks',
							required: true,
							blocks: [Content, ContentWithImage, Gradient, Logos, Reviews, Portfolio, Contact],
						},
					],
				},
			],
		},
		// ...SlugField(
		// 	{
		// 		name: 'slug',
		// 		required: true,
		// 		unique: true,
		// 		index: true,
		// 		admin: {
		// 			position: 'sidebar',
		// 		},
		// 	},
		// 	{
		// 		useFields: ['title'],
		// 	},
		// ),
		{
			name: 'isHome',
			label: 'Is Home',
			type: 'checkbox',
			defaultValue: false,
			unique: true,
			admin: {
				position: 'sidebar',
			},
		},
	],
};
