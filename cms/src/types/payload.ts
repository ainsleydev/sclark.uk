/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "NavigationHeaderLinks".
 */
export type NavigationHeaderLinks =
	| {
			title: string;
			url: string;
			id?: string | null;
	  }[]
	| null;

export interface Config {
	auth: {
		users: UserAuthOperations;
	};
	collections: {
		posts: Post;
		pages: Page;
		clients: Client;
		reviews: Review;
		portfolio: Portfolio;
		'portfolio-categories': PortfolioCategory;
		media: Media;
		users: User;
		redirects: Redirect;
		forms: Form;
		'form-submissions': FormSubmission;
		'payload-preferences': PayloadPreference;
		'payload-migrations': PayloadMigration;
	};
	db: {
		defaultIDType: number;
	};
	globals: {
		settings: Settings;
		navigation: Navigation;
	};
	locale: null;
	user: User & {
		collection: 'users';
	};
}
export interface UserAuthOperations {
	forgotPassword: {
		email: string;
		password: string;
	};
	login: {
		email: string;
		password: string;
	};
	registerFirstUser: {
		email: string;
		password: string;
	};
	unlock: {
		email: string;
		password: string;
	};
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
	id: number;
	title: string;
	excerpt?: string | null;
	content?: {
		root: {
			type: string;
			children: {
				type: string;
				version: number;
				[k: string]: unknown;
			}[];
			direction: ('ltr' | 'rtl') | null;
			format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
			indent: number;
			version: number;
		};
		[k: string]: unknown;
	} | null;
	thumbnail?: number | Media | null;
	meta?: {
		title?: string | null;
		description?: string | null;
		image?: number | Media | null;
		private?: boolean | null;
		canonicalURL?: string | null;
		structuredData?:
			| {
					[k: string]: unknown;
			  }
			| unknown[]
			| string
			| number
			| boolean
			| null;
	};
	publishedAt?: string | null;
	relatedPosts?: (number | Post)[] | null;
	tags?:
		| {
				tag?: string | null;
				id?: string | null;
		  }[]
		| null;
	updatedAt: string;
	createdAt: string;
	_status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
	id: number;
	alt: string;
	caption?: {
		root: {
			type: string;
			children: {
				type: string;
				version: number;
				[k: string]: unknown;
			}[];
			direction: ('ltr' | 'rtl') | null;
			format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
			indent: number;
			version: number;
		};
		[k: string]: unknown;
	} | null;
	updatedAt: string;
	createdAt: string;
	url?: string | null;
	thumbnailURL?: string | null;
	filename?: string | null;
	mimeType?: string | null;
	filesize?: number | null;
	width?: number | null;
	height?: number | null;
	focalX?: number | null;
	focalY?: number | null;
	sizes?: {
		webp?: {
			url?: string | null;
			width?: number | null;
			height?: number | null;
			mimeType?: string | null;
			filesize?: number | null;
			filename?: string | null;
		};
		avif?: {
			url?: string | null;
			width?: number | null;
			height?: number | null;
			mimeType?: string | null;
			filesize?: number | null;
			filename?: string | null;
		};
		thumbnail?: {
			url?: string | null;
			width?: number | null;
			height?: number | null;
			mimeType?: string | null;
			filesize?: number | null;
			filename?: string | null;
		};
		thumbnail_webp?: {
			url?: string | null;
			width?: number | null;
			height?: number | null;
			mimeType?: string | null;
			filesize?: number | null;
			filename?: string | null;
		};
		thumbnail_avif?: {
			url?: string | null;
			width?: number | null;
			height?: number | null;
			mimeType?: string | null;
			filesize?: number | null;
			filename?: string | null;
		};
		mobile?: {
			url?: string | null;
			width?: number | null;
			height?: number | null;
			mimeType?: string | null;
			filesize?: number | null;
			filename?: string | null;
		};
		mobile_webp?: {
			url?: string | null;
			width?: number | null;
			height?: number | null;
			mimeType?: string | null;
			filesize?: number | null;
			filename?: string | null;
		};
		mobile_avif?: {
			url?: string | null;
			width?: number | null;
			height?: number | null;
			mimeType?: string | null;
			filesize?: number | null;
			filename?: string | null;
		};
		tablet?: {
			url?: string | null;
			width?: number | null;
			height?: number | null;
			mimeType?: string | null;
			filesize?: number | null;
			filename?: string | null;
		};
		tablet_webp?: {
			url?: string | null;
			width?: number | null;
			height?: number | null;
			mimeType?: string | null;
			filesize?: number | null;
			filename?: string | null;
		};
		tablet_avif?: {
			url?: string | null;
			width?: number | null;
			height?: number | null;
			mimeType?: string | null;
			filesize?: number | null;
			filename?: string | null;
		};
	};
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
	id: number;
	hero: {
		title: string;
		lead: string;
		clients?: (number | Client)[] | null;
	};
	layout: (
		| BlockContentDefault
		| BlockContentWithImage
		| BlockGradient
		| BlockLogos
		| BlockReviews
		| BlockPortfolio
		| BlockContact
	)[];
	meta?: {
		title?: string | null;
		description?: string | null;
		image?: number | Media | null;
		private?: boolean | null;
		canonicalURL?: string | null;
		structuredData?:
			| {
					[k: string]: unknown;
			  }
			| unknown[]
			| string
			| number
			| boolean
			| null;
	};
	isHome?: boolean | null;
	updatedAt: string;
	createdAt: string;
	_status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "clients".
 */
export interface Client {
	id: number;
	name: string;
	url: string;
	logo: number | Media;
	updatedAt: string;
	createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BlockContentDefault".
 */
export interface BlockContentDefault {
	identifier?: string | null;
	style: 'centered' | 'spread';
	centreAlign?: boolean | null;
	content: {
		root: {
			type: string;
			children: {
				type: string;
				version: number;
				[k: string]: unknown;
			}[];
			direction: ('ltr' | 'rtl') | null;
			format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
			indent: number;
			version: number;
		};
		[k: string]: unknown;
	};
	contentHtml?: string | null;
	id?: string | null;
	blockName?: string | null;
	blockType: 'content-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BlockContentWithImage".
 */
export interface BlockContentWithImage {
	identifier?: string | null;
	textLayout: (BlockContent | BlockFAQs)[];
	imagePosition: string;
	sticky?: boolean | null;
	image: number | Media;
	id?: string | null;
	blockName?: string | null;
	blockType: 'content-with-image-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BlockContent".
 */
export interface BlockContent {
	identifier?: string | null;
	content: {
		root: {
			type: string;
			children: {
				type: string;
				version: number;
				[k: string]: unknown;
			}[];
			direction: ('ltr' | 'rtl') | null;
			format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
			indent: number;
			version: number;
		};
		[k: string]: unknown;
	};
	contentHtml?: string | null;
	id?: string | null;
	blockName?: string | null;
	blockType: 'content-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BlockFAQs".
 */
export interface BlockFAQs {
	identifier?: string | null;
	faqs?:
		| {
				question: string;
				answer: string;
				id?: string | null;
		  }[]
		| null;
	id?: string | null;
	blockName?: string | null;
	blockType: 'faqs-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BlockGradient".
 */
export interface BlockGradient {
	identifier?: string | null;
	colour: 'pink' | 'blue';
	id?: string | null;
	blockName?: string | null;
	blockType: 'gradient-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BlockLogos".
 */
export interface BlockLogos {
	identifier?: string | null;
	title: string;
	greyscale?: boolean | null;
	clients?: (number | Client)[] | null;
	id?: string | null;
	blockName?: string | null;
	blockType: 'logos-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BlockReviews".
 */
export interface BlockReviews {
	identifier?: string | null;
	title: string;
	content?: string | null;
	items?: (number | Review)[] | null;
	id?: string | null;
	blockName?: string | null;
	blockType: 'reviews-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "reviews".
 */
export interface Review {
	id: number;
	content: string;
	author: {
		firstName: string;
		lastName: string;
		description: string;
	};
	updatedAt: string;
	createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BlockPortfolio".
 */
export interface BlockPortfolio {
	identifier?: string | null;
	title: string;
	content?: string | null;
	items?: (number | Portfolio)[] | null;
	id?: string | null;
	blockName?: string | null;
	blockType: 'portfolio-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "portfolio".
 */
export interface Portfolio {
	id: number;
	title: string;
	url: string;
	date: string;
	company: number | Client;
	category: number | PortfolioCategory;
	image: number | Media;
	updatedAt: string;
	createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "portfolio-categories".
 */
export interface PortfolioCategory {
	id: number;
	title: string;
	updatedAt: string;
	createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BlockContact".
 */
export interface BlockContact {
	identifier?: string | null;
	title: string;
	content?: string | null;
	includeSocial?: boolean | null;
	form: number | Form;
	id?: string | null;
	blockName?: string | null;
	blockType: 'contact-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forms".
 */
export interface Form {
	id: number;
	heading: string;
	content?: string | null;
	title: string;
	fields?:
		| (
				| {
						name: string;
						label?: string | null;
						width?: number | null;
						required?: boolean | null;
						id?: string | null;
						blockName?: string | null;
						blockType: 'email';
				  }
				| {
						name: string;
						label?: string | null;
						width?: number | null;
						defaultValue?: string | null;
						required?: boolean | null;
						id?: string | null;
						blockName?: string | null;
						blockType: 'text';
				  }
				| {
						name: string;
						label?: string | null;
						width?: number | null;
						defaultValue?: string | null;
						required?: boolean | null;
						id?: string | null;
						blockName?: string | null;
						blockType: 'textarea';
				  }
		  )[]
		| null;
	submitButtonLabel?: string | null;
	redirect?: {
		url: string;
	};
	emails?:
		| {
				emailTo?: string | null;
				cc?: string | null;
				bcc?: string | null;
				replyTo?: string | null;
				emailFrom?: string | null;
				subject: string;
				message?: {
					root: {
						type: string;
						children: {
							type: string;
							version: number;
							[k: string]: unknown;
						}[];
						direction: ('ltr' | 'rtl') | null;
						format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
						indent: number;
						version: number;
					};
					[k: string]: unknown;
				} | null;
				id?: string | null;
		  }[]
		| null;
	confirmationMessage?: string | null;
	updatedAt: string;
	createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
	id: number;
	name: string;
	updatedAt: string;
	createdAt: string;
	enableAPIKey?: boolean | null;
	apiKey?: string | null;
	apiKeyIndex?: string | null;
	email: string;
	resetPasswordToken?: string | null;
	resetPasswordExpiration?: string | null;
	salt?: string | null;
	hash?: string | null;
	loginAttempts?: number | null;
	lockUntil?: string | null;
	password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "redirects".
 */
export interface Redirect {
	id: number;
	from: string;
	to: string;
	code: '301' | '302' | '307' | '308' | '410' | '451';
	updatedAt: string;
	createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submissions".
 */
export interface FormSubmission {
	id: number;
	form: number | Form;
	submissionData?:
		| {
				field: string;
				value: string;
				id?: string | null;
		  }[]
		| null;
	updatedAt: string;
	createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
	id: number;
	user: {
		relationTo: 'users';
		value: number | User;
	};
	key?: string | null;
	value?:
		| {
				[k: string]: unknown;
		  }
		| unknown[]
		| string
		| number
		| boolean
		| null;
	updatedAt: string;
	createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
	id: number;
	name?: string | null;
	batch?: number | null;
	updatedAt: string;
	createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Settings {
	id: number;
	siteName?: string | null;
	locale?: string;
	tagLine?: string | null;
	logo?: number | Media | null;
	robots?: string | null;
	codeInjection?: {
		head?: string | null;
		footer?: string | null;
	};
	contact?: {
		email?: string | null;
		telephone?: string | null;
	};
	address?: {
		line1?: string | null;
		line2?: string | null;
		city?: string | null;
		county?: string | null;
		postcode?: string | null;
		country?:
			| (
					| 'Afghanistan'
					| 'Albania'
					| 'Algeria'
					| 'Andorra'
					| 'Angola'
					| 'Antigua and Barbuda'
					| 'Argentina'
					| 'Armenia'
					| 'Australia'
					| 'Austria'
					| 'Azerbaijan'
					| 'Bahamas'
					| 'Bahrain'
					| 'Bangladesh'
					| 'Barbados'
					| 'Belarus'
					| 'Belgium'
					| 'Belize'
					| 'Benin'
					| 'Bhutan'
					| 'Bolivia'
					| 'Bosnia and Herzegovina'
					| 'Botswana'
					| 'Brazil'
					| 'Brunei'
					| 'Bulgaria'
					| 'Burkina Faso'
					| 'Burundi'
					| 'Cabo Verde'
					| 'Cambodia'
					| 'Cameroon'
					| 'Canada'
					| 'Central African Republic'
					| 'Chad'
					| 'Chile'
					| 'China'
					| 'Colombia'
					| 'Comoros'
					| 'Congo (Congo-Brazzaville)'
					| 'Costa Rica'
					| 'Croatia'
					| 'Cuba'
					| 'Cyprus'
					| 'Czechia (Czech Republic)'
					| 'Democratic Republic of the Congo'
					| 'Denmark'
					| 'Djibouti'
					| 'Dominica'
					| 'Dominican Republic'
					| 'Ecuador'
					| 'Egypt'
					| 'El Salvador'
					| 'Equatorial Guinea'
					| 'Eritrea'
					| 'Estonia'
					| 'Eswatini (formerly Swaziland)'
					| 'Ethiopia'
					| 'Fiji'
					| 'Finland'
					| 'France'
					| 'Gabon'
					| 'Gambia'
					| 'Georgia'
					| 'Germany'
					| 'Ghana'
					| 'Greece'
					| 'Grenada'
					| 'Guatemala'
					| 'Guinea'
					| 'Guinea-Bissau'
					| 'Guyana'
					| 'Haiti'
					| 'Honduras'
					| 'Hungary'
					| 'Iceland'
					| 'India'
					| 'Indonesia'
					| 'Iran'
					| 'Iraq'
					| 'Ireland'
					| 'Israel'
					| 'Italy'
					| 'Jamaica'
					| 'Japan'
					| 'Jordan'
					| 'Kazakhstan'
					| 'Kenya'
					| 'Kiribati'
					| 'Kuwait'
					| 'Kyrgyzstan'
					| 'Laos'
					| 'Latvia'
					| 'Lebanon'
					| 'Lesotho'
					| 'Liberia'
					| 'Libya'
					| 'Liechtenstein'
					| 'Lithuania'
					| 'Luxembourg'
					| 'Madagascar'
					| 'Malawi'
					| 'Malaysia'
					| 'Maldives'
					| 'Mali'
					| 'Malta'
					| 'Marshall Islands'
					| 'Mauritania'
					| 'Mauritius'
					| 'Mexico'
					| 'Micronesia'
					| 'Moldova'
					| 'Monaco'
					| 'Mongolia'
					| 'Montenegro'
					| 'Morocco'
					| 'Mozambique'
					| 'Myanmar (formerly Burma)'
					| 'Namibia'
					| 'Nauru'
					| 'Nepal'
					| 'Netherlands'
					| 'New Zealand'
					| 'Nicaragua'
					| 'Niger'
					| 'Nigeria'
					| 'North Korea'
					| 'North Macedonia'
					| 'Norway'
					| 'Oman'
					| 'Pakistan'
					| 'Palau'
					| 'Palestine State'
					| 'Panama'
					| 'Papua New Guinea'
					| 'Paraguay'
					| 'Peru'
					| 'Philippines'
					| 'Poland'
					| 'Portugal'
					| 'Qatar'
					| 'Romania'
					| 'Russia'
					| 'Rwanda'
					| 'Saint Kitts and Nevis'
					| 'Saint Lucia'
					| 'Saint Vincent and the Grenadines'
					| 'Samoa'
					| 'San Marino'
					| 'Sao Tome and Principe'
					| 'Saudi Arabia'
					| 'Senegal'
					| 'Serbia'
					| 'Seychelles'
					| 'Sierra Leone'
					| 'Singapore'
					| 'Slovakia'
					| 'Slovenia'
					| 'Solomon Islands'
					| 'Somalia'
					| 'South Africa'
					| 'South Korea'
					| 'South Sudan'
					| 'Spain'
					| 'Sri Lanka'
					| 'Sudan'
					| 'Suriname'
					| 'Sweden'
					| 'Switzerland'
					| 'Syria'
					| 'Taiwan'
					| 'Tajikistan'
					| 'Tanzania'
					| 'Thailand'
					| 'Timor-Leste'
					| 'Togo'
					| 'Tonga'
					| 'Trinidad and Tobago'
					| 'Tunisia'
					| 'Turkey'
					| 'Turkmenistan'
					| 'Tuvalu'
					| 'Uganda'
					| 'Ukraine'
					| 'United Arab Emirates'
					| 'United Kingdom'
					| 'United States of America'
					| 'Uruguay'
					| 'Uzbekistan'
					| 'Vanuatu'
					| 'Venezuela'
					| 'Vietnam'
					| 'Yemen'
					| 'Zambia'
					| 'Zimbabwe'
			  )
			| null;
	};
	social?: {
		linkedIn?: string | null;
		x?: string | null;
		facebook?: string | null;
		instagram?: string | null;
		youtube?: string | null;
		tiktok?: string | null;
	};
	maintenance?: {
		enabled?: boolean | null;
		title?: string | null;
		content?: string | null;
	};
	footer?: {
		title?: string | null;
		content?: string | null;
	};
	meta?: {
		title?: string | null;
		description?: string | null;
		image?: number | Media | null;
		private?: boolean | null;
		canonicalURL?: string | null;
		structuredData?:
			| {
					[k: string]: unknown;
			  }
			| unknown[]
			| string
			| number
			| boolean
			| null;
	};
	updatedAt?: string | null;
	createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "navigation".
 */
export interface Navigation {
	id: number;
	header?: NavigationHeaderLinks;
	updatedAt?: string | null;
	createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
	[k: string]: unknown;
}

declare module 'payload' {
	export interface GeneratedTypes extends Config {}
}
