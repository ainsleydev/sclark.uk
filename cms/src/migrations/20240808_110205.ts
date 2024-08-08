import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite';

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`pages_blocks_content_block\` ADD \`identifier\` text;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`pages_blocks_faqs_block\` ADD \`identifier\` text;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`pages_blocks_content_with_image_block\` ADD \`identifier\` text;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`pages_blocks_gradient_block\` ADD \`identifier\` text;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`pages_blocks_logos_block\` ADD \`identifier\` text;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`pages_blocks_reviews_block\` ADD \`identifier\` text;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`pages_blocks_portfolio_block\` ADD \`identifier\` text;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`pages_blocks_contact_block\` ADD \`identifier\` text;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v_blocks_content_block\` ADD \`identifier\` text;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v_blocks_faqs_block\` ADD \`identifier\` text;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v_blocks_content_with_image_block\` ADD \`identifier\` text;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v_blocks_gradient_block\` ADD \`identifier\` text;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v_blocks_logos_block\` ADD \`identifier\` text;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v_blocks_reviews_block\` ADD \`identifier\` text;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v_blocks_portfolio_block\` ADD \`identifier\` text;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v_blocks_contact_block\` ADD \`identifier\` text;`,
	);
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`pages_blocks_content_block\` DROP COLUMN \`identifier\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`pages_blocks_faqs_block\` DROP COLUMN \`identifier\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`pages_blocks_content_with_image_block\` DROP COLUMN \`identifier\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`pages_blocks_gradient_block\` DROP COLUMN \`identifier\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`pages_blocks_logos_block\` DROP COLUMN \`identifier\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`pages_blocks_reviews_block\` DROP COLUMN \`identifier\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`pages_blocks_portfolio_block\` DROP COLUMN \`identifier\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`pages_blocks_contact_block\` DROP COLUMN \`identifier\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v_blocks_content_block\` DROP COLUMN \`identifier\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v_blocks_faqs_block\` DROP COLUMN \`identifier\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v_blocks_content_with_image_block\` DROP COLUMN \`identifier\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v_blocks_gradient_block\` DROP COLUMN \`identifier\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v_blocks_logos_block\` DROP COLUMN \`identifier\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v_blocks_reviews_block\` DROP COLUMN \`identifier\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v_blocks_portfolio_block\` DROP COLUMN \`identifier\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v_blocks_contact_block\` DROP COLUMN \`identifier\`;`,
	);
}
