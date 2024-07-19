// const globals = ['navigation', 'settings'];
// const collections = [
// 	'posts',
// 	'pages',
// 	'clients',
// 	'reviews',
// 	'portfolio',
// 	'portfolio-categories',
// 	'forms',
// 	'form-submissions',
// 	'redirects',
// 	'media',
// 	'users',
// ];

// Clear Globals
// payload.logger.info('Clearing globals...');
// for (const global of globals) {
// 	try {
// 		await payload.updateGlobal({
// 			slug: global as GlobalSlug,
// 			data: {},
// 			req,
// 		});
// 	} catch (error) {
// 		payload.logger.warn(`Clearing global ${global}: ${error}`);
// 	}
// }
//
// // Clear Collections
// payload.logger.info('Clearing collections...');
// for (const collection of collections) {
// 	try {
// 		await payload.delete({
// 			collection: collection as CollectionSlug,
// 			where: {},
// 			req,
// 		});
// 	} catch (error) {
// 		payload.logger.warn(`Clearing collection ${collection}: ${error}`);
// 	}
// }
