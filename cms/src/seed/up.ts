import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
	type MediaSeed,
	clients,
	portfolioCategories,
	portfolioItems,
	reviews,
} from '@/seed/content';
import type { Media } from '@/types/payload';
import env from '@ainsleydev/payload-helper/dist/util/env';
import type { Payload, PayloadRequest } from 'payload';
import { getFileByPath } from 'payload';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const uploadMedia = async (
	req: PayloadRequest,
	payload: Payload,
	media: MediaSeed,
): Promise<Media> => {
	try {
		const image = await getFileByPath(path.resolve(dirname, media.path));
		return await payload.create({
			collection: 'media',
			file: image,
			data: {
				alt: media.alt,
				//caption: media.caption,
			},
			req,
		});
	} catch (error) {
		payload.logger.error(`Uploading media: ${error}`);
		throw error;
	}
};

/**
 * Up script to create tables and seed data.
 *
 * @param payload
 * @param req
 */
export const up = async ({
	payload,
	req,
}: {
	payload: Payload;
	req: PayloadRequest;
}): Promise<void> => {
	payload.logger.info('Running up script');

	await payload.init({
		config: payload.config,
	});

	// Creating new tables
	payload.logger.info('Creating indexes...');
	try {
		if (payload.db.init) {
			await payload.db.init();
		}
	} catch (error) {
		payload.logger.error(`Creating database: ${error}`);
		return;
	}

	// Create admin
	payload.logger.info('Creating admin user...');
	await payload.create({
		collection: 'users',
		data: {
			email: 'hello@ainsley.dev',
			name: 'Ainsley Clark',
			password: env('ADMIN_PASSWORD', 'password'),
			enableAPIKey: true,
		},
		req,
	});

	// Create Settings
	payload.logger.info('Creating settings...');
	const logo = await uploadMedia(req, payload, {
		path: '../../../web/assets/exports/logo.svg',
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
};
