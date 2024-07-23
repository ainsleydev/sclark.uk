import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { htmlToLexical, lexicalToHtml } from '@ainsleydev/payload-helper/src/util/lexical';
import dotenv from 'dotenv';
import {
	type PayloadRequest,
	commitTransaction,
	getPayload,
	initTransaction,
	killTransaction,
} from 'payload';
import { importConfig } from 'payload/node';
import { down } from './down';
import { up } from './up';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

dotenv.config({
	path: path.resolve(dirname, '../../.env'),
});

const seed = async () => {
	for (const fn of [down, up]) {
		const config = await importConfig(path.resolve(dirname, '../payload.config.ts'));
		const payload = await getPayload({ config });
		const req = { payload } as PayloadRequest;

		await initTransaction(req);

		try {
			await fn({ payload, req });
			payload.logger.info('Seed complete');
			await commitTransaction(req);
		} catch (err) {
			const message = err instanceof Error ? err.message : 'Unknown error';
			payload.logger.error(`Seed failed: ${message}`);
			await killTransaction(req);
		}
	}
};

seed()
	.then(() => process.exit(0))
	.catch((e) => {
		console.error(e);
		process.exit(1);
	});
