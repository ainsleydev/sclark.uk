import type { BlockContentWithImage, BlockFAQs } from '@/types/payload';
import { htmlToLexical } from '@ainsleydev/payload-helper/dist/util/lexical';
import type { RequiredDataFromCollectionSlug } from 'payload';

export interface MediaSeed {
	path: string;
	alt: string;
	caption?: string;
}

export const clients: (Omit<RequiredDataFromCollectionSlug<'clients'>, 'id' | 'logo'> & {
	id: number;
	image: MediaSeed;
})[] = [
	{
		id: 1,
		name: 'ainsley.dev',
		url: 'https://ainsley.dev',
		image: {
			path: '../../../web/assets/exports/logos/coloured/ainsley-dev.svg',
			alt: 'ainsley.dev Logo',
		},
	},
	{
		id: 2,
		name: "Dec's Pets",
		url: 'https://decspets.ie',
		image: {
			path: '../../../web/assets/exports/logos/coloured/decs-pets.svg',
			alt: "Dec's Pets Logo",
		},
	},
	{
		id: 3,
		name: 'Schools and Agents',
		url: 'https://schoolsandagents.com/',
		image: {
			path: '../../../web/assets/exports/logos/coloured/schools-and-agents.svg',
			alt: 'Schools and Agents Logo',
		},
	},
	{
		id: 4,
		name: 'Bailogik',
		url: 'https://www.bailogik.com/',
		image: {
			path: '../../../web/assets/exports/logos/coloured/bailogik.svg',
			alt: 'Bailogik Logo',
		},
	},
	{
		id: 5,
		name: 'Britcent',
		url: 'https://britcent.uk/',
		image: {
			path: '../../../web/assets/exports/logos/coloured/britcent.svg',
			alt: 'Britcent Logo',
		},
	},
	{
		id: 6,
		name: 'Jennifer Cooper',
		url: 'https://jennifercoopertimesaver.co.uk/',
		image: {
			path: '../../../web/assets/exports/logos/coloured/jennifer-cooper.svg',
			alt: 'Jennifer Cooper Logo',
		},
	},
	{
		id: 7,
		name: 'Islington Centre for English',
		url: 'https://letslearnenglish.org/',
		image: {
			path: '../../../web/assets/exports/logos/coloured/ice.svg',
			alt: 'Islington Centre for English Logo',
		},
	},
	{
		id: 8,
		name: 'Finesse Group',
		url: 'https://byfinessegroup.com/',
		image: {
			path: '../../../web/assets/exports/logos/coloured/finesse-group.svg',
			alt: 'Finesse Group Logo',
		},
	},
];

export const reviews: RequiredDataFromCollectionSlug<'reviews'>[] = [
	{
		id: 1,
		content:
			'She tailors our weekly sessions to address my speaking challenges, including habitual errors and pronunciation, and uses her extensive teaching experience to understand common learner issues.',
		author: {
			firstName: 'Chris',
			lastName: 'Talent',
			description: 'An English learner from Japan.',
		},
	},
	{
		id: 2,
		content:
			'As an English teacher at Islington Centre for English, Stephanie was a huge asset; organised, professional, very popular with students and staff and a joy to work with.',
		author: {
			firstName: 'Tim',
			lastName: 'Cook',
			description: 'Owner of Islington Centre for English',
		},
	},
	{
		id: 3,
		content:
			'As an English language teacher, Stephanie reported directly to me and in all our years of working together I never had a single complaint from a student she taught.',
		author: {
			firstName: 'Bernice',
			lastName: 'Whatever',
			description: 'Owner of Islington Centre for English',
		},
	},
];

export const portfolioCategories: RequiredDataFromCollectionSlug<'portfolio-categories'>[] = [
	{
		id: 1,
		title: 'E-Commerce',
	},
	{
		id: 2,
		title: 'Technology',
	},
	{
		id: 3,
		title: 'International Education',
	},
	{
		id: 4,
		title: 'Digital Marketing',
	},
	{
		id: 5,
		title: 'Language Learning',
	},
];

export const portfolioItems: (Omit<RequiredDataFromCollectionSlug<'portfolio'>, 'id' | 'image'> & {
	id: number;
	image: MediaSeed;
})[] = [
	{
		id: 1,
		title: 'All You Need to Know About Getting a Pet Tortoise',
		url: 'https://decspets.ie/insights/all-you-need-to-know-about-getting-a-pet-tortoise/',
		date: '2022-10-13',
		category: 1, // E-Commerce
		company: 2, // Dec's Pets
		image: {
			path: '../../../web/assets/exports/portfolio/pet-tortoise.jpg',
			alt: 'All You Need to Know About Getting a Pet Tortoise image',
		},
	},
	{
		id: 2,
		title: 'Marketing Monday: 3 Email Marketing Best Practices for Education Providers',
		url: 'https://schoolsandagents.com/newsarticle/marketing_monday_1007',
		date: '2023-07-10',
		category: 3, // International Education
		company: 3, // Schools and Agents
		image: {
			path: '../../../web/assets/exports/portfolio/email-marketing.jpg',
			alt: 'Marketing Monday: 3 Email Marketing Best Practices for Education Providers image',
		},
	},
	{
		id: 3,
		title: 'Prebuilt Themes vs. Custom Websites: Which Is Right for You?',
		url: 'https://ainsley.dev/insights/prebuilt-vs-custom/',
		date: '2023-06-06',
		category: 2, // Technology
		company: 1, // ainsley.dev
		image: {
			path: '../../../web/assets/exports/portfolio/prebuilt-themes.jpg',
			alt: 'Prebuilt Themes vs. Custom Websites: Which Is Right for You? image',
		},
	},
	{
		id: 4,
		title: '5 Ways to Get Your Social Media Promotion Strategy Right',
		url: 'https://www.bailogik.com/l/5-ways-to-get-your-social-media-promotion-strategy-right/',
		date: '2023-03-04',
		category: 4, // Digital Marketing
		company: 4, // Bailogik
		image: {
			path: '../../../web/assets/exports/portfolio/social-media-strategy.jpg',
			alt: '5 Ways to Get Your Social Media Promotion Strategy Right image',
		},
	},
	{
		id: 5,
		title: '3 Great Tips for Online Learning: Corona Survival Guide',
		url: 'https://britcent.uk/en/landing/blog/contents/study-tips/41.do',
		date: '2023-08-01',
		category: 5, // Language Learning
		company: 5, // Britcent
		image: {
			path: '../../../web/assets/exports/portfolio/corona-survival-guide.jpg',
			alt: '3 Great Tips for Online Learning: Corona Survival Guide image',
		},
	},
	{
		id: 6,
		title: 'How to Enhance Your Website Navigation Menu for SEO and Usability',
		url: 'https://ainsley.dev/insights/enhance-website-navigation-menus-for-seo/',
		date: '2023-10-01',
		category: 2, // Technology
		company: 1, // ainsley.dev
		image: {
			path: '../../../web/assets/exports/portfolio/enhance-nav-menus.jpg',
			alt: 'How to Enhance Your Website Navigation Menu for SEO and Usability image',
		},
	},
];

const faqs: BlockFAQs = {
	blockType: 'faqs-block',
	faqs: [
		{
			question: 'How long is each lesson?',
			answer: "I'm baby farm-to-table kombucha microdosing occupy four dollar toast flexitarian hoodie. Blackbird spyplane vibecession taxidermy kogi, 3 wolf moon shabby chic salvia. Pork belly man braid fashion axe big mood gastropub drinking vinegar gentrify scenester aesthetic tumblr kale chips coloring book. Blackbird spyplane prism pinterest keytar cardigan, hashtag enamel pin craft beer. Sartorial synth cold-pressed snackwave shaman.",
		},
		{
			question: 'How regularly should I have lessons?',
			answer: "I'm baby farm-to-table kombucha microdosing occupy four dollar toast flexitarian hoodie. Blackbird spyplane vibecession taxidermy kogi, 3 wolf moon shabby chic salvia. Pork belly man braid fashion axe big mood gastropub drinking vinegar gentrify scenester aesthetic tumblr kale chips coloring book. Blackbird spyplane prism pinterest keytar cardigan, hashtag enamel pin craft beer. Sartorial synth cold-pressed snackwave shaman.",
		},
		{
			question: 'Which English levels do you teach?',
			answer: "I'm baby farm-to-table kombucha microdosing occupy four dollar toast flexitarian hoodie. Blackbird spyplane vibecession taxidermy kogi, 3 wolf moon shabby chic salvia. Pork belly man braid fashion axe big mood gastropub drinking vinegar gentrify scenester aesthetic tumblr kale chips coloring book. Blackbird spyplane prism pinterest keytar cardigan, hashtag enamel pin craft beer. Sartorial synth cold-pressed snackwave shaman.",
		},
		{
			question: 'How will lessons be conducted?',
			answer: "I'm baby farm-to-table kombucha microdosing occupy four dollar toast flexitarian hoodie. Blackbird spyplane vibecession taxidermy kogi, 3 wolf moon shabby chic salvia. Pork belly man braid fashion axe big mood gastropub drinking vinegar gentrify scenester aesthetic tumblr kale chips coloring book. Blackbird spyplane prism pinterest keytar cardigan, hashtag enamel pin craft beer. Sartorial synth cold-pressed snackwave shaman.",
		},
		{
			question: 'Do I need any special materials or equipment?',
			answer: "I'm baby farm-to-table kombucha microdosing occupy four dollar toast flexitarian hoodie. Blackbird spyplane vibecession taxidermy kogi, 3 wolf moon shabby chic salvia. Pork belly man braid fashion axe big mood gastropub drinking vinegar gentrify scenester aesthetic tumblr kale chips coloring book. Blackbird spyplane prism pinterest keytar cardigan, hashtag enamel pin craft beer. Sartorial synth cold-pressed snackwave shaman.",
		},
	],
};

export const form: RequiredDataFromCollectionSlug<'forms'> = {
	id: 0,
	title: 'Contact',
	heading: 'Get in touch',
	fields: [
		{
			blockType: 'text',
			name: 'name',
			label: 'Name',
			required: true,
		},
		{
			blockType: 'email',
			name: 'email',
			label: 'Email',
			required: true,
		},
		{
			blockType: 'textarea',
			name: 'message',
			label: 'Message',
			required: true,
		},
	],
};

export const home: RequiredDataFromCollectionSlug<'pages'> = {
	isHome: true,
	_status: 'published',
	hero: {
		title: 'Can’t find the right words?',
		lead: 'Combining a love for the English language and written word, S Clark provides two distinct professional services – one-to-one English language teaching for non-native speakers and content writing and editing for businesses',
		clients: [8, 1, 2, 3, 6],
	},
	layout: [
		{
			blockType: 'gradient-block',
			colour: 'pink',
		},
		{
			blockType: 'content-block',
			style: 'centered',
			centre: true,
			// @ts-ignore
			content: htmlToLexical(
				'<h2>Online English Lessons</h2><p>Are you worried about making mistakes in English? Do you know what to say in your head, but the words don’t come out? Can you speak some English, but it’s difficult to talk about complex topics? Do you need to pass an English exam?</p>',
			),
		},
		{
			blockType: 'content-with-image-block',
			imagePosition: 'left',
			textLayout: [
				{
					blockType: 'content-block',
					// @ts-ignore
					content: htmlToLexical(
						'<h3>Learning a foreign language isn\'t easy</h3><p>Especially when it comes to speaking. It takes time, practice and confidence.  But you are not alone. A s an English language teacher with 20 years’ experience, I’ve helped adults from all over the world to feel more confident in their English skills – and I can help you too!</p><p>How? With professional teaching techniques, a deep knowledge of the English language, a lot of patience, and a friendly, positive attitude. I’ll help you feel so comfortable speaking English, that you’ll forget you were ever worried.</p><h3>But you can do it, in 3 easy steps</h3><ol class="list-number"><li value=1>Discuss what you need in our free 20-minute call</li><li value=2>Do something else that’s fucking fantastic</li><li value=3>Book your first set of lessons</li></ol>',
					),
				},
				faqs,
			],
		},
		{
			blockType: 'gradient-block',
			colour: 'blue',
		},
		{
			blockType: 'content-block',
			style: 'centered',
			// @ts-ignore
			content: htmlToLexical(
				'<h2>Content Writing</h2><p>Are you worried about making mistakes in English? Do you know what to say in your head, but the words don’t come out? Can you speak some English, but it’s difficult to talk about complex topics? Do you need to pass an English exam?</p>',
			),
		},
		{
			blockType: 'content-with-image-block',
			image: 1,
			imagePosition: 'left',
			textLayout: [
				{
					blockType: 'content-block',
					// @ts-ignore
					content: htmlToLexical(
						'<h3>Learning a foreign language isn\'t easy</h3><p>Especially when it comes to speaking. It takes time, practice and confidence.  But you are not alone. A s an English language teacher with 20 years’ experience, I’ve helped adults from all over the world to feel more confident in their English skills – and I can help you too!</p><p>How? With professional teaching techniques, a deep knowledge of the English language, a lot of patience, and a friendly, positive attitude. I’ll help you feel so comfortable speaking English, that you’ll forget you were ever worried.</p><h3>But you can do it, in 3 easy steps</h3><ol class="list-number"><li value=1>Discuss what you need in our free 20-minute call</li><li value=2>Do something else that’s fucking fantastic</li><li value=3>Book your first set of lessons</li></ol>',
					),
				},
				faqs,
			],
		},
		{
			blockType: 'reviews-block',
			title: 'Testimonials',
			content:
				'Don’t just take my word for it – here’s what some of my clients have to say.Don’t just take my word for it – here’s what some of my clients have to say. Don’t just take my word for it – here’s what some of my clients have to say.',
			items: [1, 2, 3],
		},
		{
			blockType: 'portfolio-block',
			title: 'Portfolio',
			content:
				"I'm baby fam drinking vinegar tumeric semiotics vaporware shabby chic tonx edison bulb twee kogi. Church-key kogi DSA unicorn ugh adaptogen locavore poutine lumbersexual YOLO pickled. Forage chia thundercats chartreuse bespoke typewriter.",
			items: [1, 2, 3, 4, 5, 6],
		},
		{
			blockType: 'contact-block',
			title: 'Contact now',
			content:
				'Don’t just take my word for it – here’s what some of my clients have to say.Don’t just take my word for it – here’s what some of my clients have to say. Don’t just take my word for it – here’s what some of my clients have to say.',
			includeSocial: true,
			form: 1,
		},
		{
			blockType: 'logos-block',
			title: 'Trusted by leading professionals',
			greyscale: true,
			clients: [8, 1, 2, 3, 6],
		},
	],
};
