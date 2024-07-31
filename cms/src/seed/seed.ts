import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { clients, form, home, portfolioCategories, portfolioItems, reviews } from '@/seed/content';
import { type DBAdapter, type Seeder, seed } from '@ainsleydev/payload-helper/dist/seed/seed';
import { uploadMedia } from '@ainsleydev/payload-helper/dist/seed/up';
import env from '@ainsleydev/payload-helper/dist/util/env';
import type { Payload, PayloadRequest } from 'payload';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const fn: Seeder = async ({
	payload,
	req,
}: {
	payload: Payload;
	req: PayloadRequest;
}): Promise<void> => {
	// Create admin
	payload.logger.info('Creating admin user...');
	const user = await payload.create({
		collection: 'users',
		data: {
			email: 'hello@ainsley.dev',
			name: 'Ainsley Clark',
			password: env('ADMIN_PASSWORD', 'password'),
			enableAPIKey: true,
		},
		req,
	});
	console.log(`User created: ${JSON.stringify(user)}`);

	// Create Settings
	payload.logger.info('Creating settings...');
	const logo = await uploadMedia(req, payload, {
		path: '../../../web/assets/images/logo.svg',
		alt: 'S.Clark Logo',
	});
	const ogImage = await uploadMedia(req, payload, {
		path: '../../../web/assets/images/opengraph.jpg',
		alt: 'S.Clark Logo',
	});
	await payload.updateGlobal({
		slug: 'settings',
		data: {
			contact: {
				email: 'hello@sclark.uk',
				telephone: '+447415685531',
			},
			locale: 'en_GB',
			logo: logo.id,
			maintenance: {
				enabled: false,
				title: 'Under Maintenance',
				content: 'We are currently undergoing maintenance. Please check back soon.',
			},
			meta: {
				title: 'S. Clark',
				description: 'Can’t find the right words?',
				private: false,
				image: ogImage.id,
			},
			robots: 'User-agent: *\nDisallow: /',
			siteName: 'S. Clark',
			social: {
				instagram: 'https://www.instagram.com/s.clark_language_content',
				linkedIn: 'https://www.linkedin.com/in/stephanie-clark-09076ba1',
				tiktok: 'https://www.tiktok.com/@s.clark_language_content',
				youtube: 'https://youtube.com/@english_language_lounge?feature=shared',
			},
			tagLine: 'Can’t find the right words?',
			footer: {
				title: 'Can’t find the right words?',
				content:
					'Combining a love for the English language and written word something else and something else.',
			},
		},
		req,
	});

	// Create Clients
	payload.logger.info('Creating clients...');
	try {
		for (const client of clients) {
			const media = await uploadMedia(req, payload, client.image);
			await payload.create({
				collection: 'clients',
				data: {
					...client,
					logo: media.id,
				},
				req,
			});
		}
	} catch (error) {
		payload.logger.error(`Creating clients: ${error}`);
		return;
	}

	// Create Reviews
	payload.logger.info('Creating reviews...');
	try {
		for (const review of reviews) {
			await payload.create({
				collection: 'reviews',
				data: review,
				req,
			});
		}
	} catch (error) {
		payload.logger.error(`Creating reviews: ${error}`);
		return;
	}

	// Create Portfolio Categories
	payload.logger.info('Creating portfolio categories...');
	try {
		for (const cat of portfolioCategories) {
			await payload.create({
				collection: 'portfolio-categories',
				data: cat,
				req,
			});
		}
	} catch (error) {
		payload.logger.error(`Creating portfolio categories: ${error}`);
		return;
	}

	// Create Portfolio
	payload.logger.info('Creating portfolio...');
	try {
		for (const item of portfolioItems) {
			const media = await uploadMedia(req, payload, item.image);
			await payload.create({
				collection: 'portfolio',
				data: {
					...item,
					image: media.id,
				},
				req,
			});
		}
	} catch (error) {
		payload.logger.error(`Creating portfolio categories: ${error}`);
		return;
	}

	// Create Form
	payload.logger.info('Creating form...');
	try {
		await payload.create({
			collection: 'forms',
			data: form,
			req,
		});
	} catch (error) {
		payload.logger.error(`Creating form: ${error}`);
		return;
	}

	// Create home
	payload.logger.info('Creating home page...');

	const mockupLaptop = await uploadMedia(req, payload, {
		path: '../../../web/assets/images/mockups/laptop.png',
		alt: 'Laptop Mockup',
	});
	// @ts-ignore
	home.layout[2].image = mockupLaptop.id;

	const mockupTablet = await uploadMedia(req, payload, {
		path: '../../../web/assets/images/mockups/tablet.png',
		alt: 'Tablet Mockup',
	});
	// @ts-ignore
	home.layout[5].image = mockupTablet.id;

	try {
		await payload.create({
			collection: 'pages',
			data: home,
			req,
		});
	} catch (error) {
		payload.logger.error(`Creating homepage: ${error}`);
		return;
	}
};

seed({
	envPath: path.resolve(dirname, '../.env'),
	configPath: path.resolve(dirname, '../payload.config.js'),
	dbAdapter: DBAdapter.Postgres,
	seeder: fn,
});
