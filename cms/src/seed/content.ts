import type { BlockContentWithImage, BlockFAQs } from '@/types/payload';
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
			alt: 'ainsley.dev logo',
		},
	},
	{
		id: 2,
		name: "Dec's Pets",
		url: 'https://decspets.ie',
		image: {
			path: '../../../web/assets/exports/logos/coloured/decs-pets.svg',
			alt: "Dec's Pets logo",
		},
	},
	{
		id: 3,
		name: 'Schools and Agents',
		url: 'https://schoolsandagents.com/',
		image: {
			path: '../../../web/assets/exports/logos/coloured/schools-and-agents.svg',
			alt: 'Schools and Agents logo',
		},
	},
	{
		id: 4,
		name: 'Bailogik',
		url: 'https://www.bailogik.com/',
		image: {
			path: '../../../web/assets/exports/logos/coloured/bailogik.svg',
			alt: 'Bailogik logo',
		},
	},
	{
		id: 5,
		name: 'Britcent',
		url: 'https://britcent.uk/',
		image: {
			path: '../../../web/assets/exports/logos/coloured/britcent.svg',
			alt: 'Britcent logo',
		},
	},
];

export const reviews: RequiredDataFromCollectionSlug<'reviews'>[] = [
	{
		content:
			'She tailors our weekly sessions to address my speaking challenges, including habitual errors and pronunciation, and uses her extensive teaching experience to understand common learner issues.',
		author: {
			firstName: 'Chris',
			lastName: 'Talent',
			description: 'An English learner from Japan.',
		},
	},
	{
		content:
			'As an English teacher at Islington Centre for English, Stephanie was a huge asset; organised, professional, very popular with students and staff and a joy to work with.',
		author: {
			firstName: 'Tim',
			lastName: 'Cook',
			description: 'Owner of Islington Centre for English',
		},
	},
	{
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

export const home: RequiredDataFromCollectionSlug<'pages'> = {
	isHome: true,
	_status: 'published',
	layout: [
		// {
		// 	blockType: 'content-block',
		// 	style: 'centered',
		// 	content: $generateNodesFromDOM(null, '<h1>Test</h1>' | null),
		// },
		{
			blockType: 'content-with-image-block',
			image: 1,
			imagePosition: 'left',
			textLayout: [faqs],
		},
	],
};

export const contentWritingServicesBlock: Omit<BlockContentWithImage, 'image'> & {
	image: MediaSeed;
} = {
	blockType: 'content-with-image-block',
	image: {
		path: 'TODO',
		alt: 'TODO',
	},
	imagePosition: 'left',
	textLayout: [],
};
