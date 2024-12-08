import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite';

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
	await payload.db.drizzle.run(
		sql`DROP INDEX IF EXISTS \`media_sizes_desktop_sizes_desktop_filename_idx\`;`,
	);
	await payload.db.drizzle.run(
		sql`DROP INDEX IF EXISTS \`media_sizes_desktop_webp_sizes_desktop_webp_filename_idx\`;`,
	);
	await payload.db.drizzle.run(
		sql`DROP INDEX IF EXISTS \`media_sizes_desktop_avif_sizes_desktop_avif_filename_idx\`;`,
	);
	await payload.db.drizzle.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_desktop_url\`;`);
	await payload.db.drizzle.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_desktop_width\`;`);
	await payload.db.drizzle.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_desktop_height\`;`);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_desktop_mime_type\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_desktop_filesize\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_desktop_filename\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_desktop_webp_url\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_desktop_webp_width\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_desktop_webp_height\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_desktop_webp_mime_type\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_desktop_webp_filesize\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_desktop_webp_filename\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_desktop_avif_url\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_desktop_avif_width\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_desktop_avif_height\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_desktop_avif_mime_type\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_desktop_avif_filesize\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_desktop_avif_filename\`;`,
	);
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
	await payload.db.drizzle.run(sql`ALTER TABLE \`media\` ADD \`sizes_desktop_url\` text;`);
	await payload.db.drizzle.run(sql`ALTER TABLE \`media\` ADD \`sizes_desktop_width\` numeric;`);
	await payload.db.drizzle.run(sql`ALTER TABLE \`media\` ADD \`sizes_desktop_height\` numeric;`);
	await payload.db.drizzle.run(sql`ALTER TABLE \`media\` ADD \`sizes_desktop_mime_type\` text;`);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` ADD \`sizes_desktop_filesize\` numeric;`,
	);
	await payload.db.drizzle.run(sql`ALTER TABLE \`media\` ADD \`sizes_desktop_filename\` text;`);
	await payload.db.drizzle.run(sql`ALTER TABLE \`media\` ADD \`sizes_desktop_webp_url\` text;`);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` ADD \`sizes_desktop_webp_width\` numeric;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` ADD \`sizes_desktop_webp_height\` numeric;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` ADD \`sizes_desktop_webp_mime_type\` text;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` ADD \`sizes_desktop_webp_filesize\` numeric;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` ADD \`sizes_desktop_webp_filename\` text;`,
	);
	await payload.db.drizzle.run(sql`ALTER TABLE \`media\` ADD \`sizes_desktop_avif_url\` text;`);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` ADD \`sizes_desktop_avif_width\` numeric;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` ADD \`sizes_desktop_avif_height\` numeric;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` ADD \`sizes_desktop_avif_mime_type\` text;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` ADD \`sizes_desktop_avif_filesize\` numeric;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`media\` ADD \`sizes_desktop_avif_filename\` text;`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`media_sizes_desktop_sizes_desktop_filename_idx\` ON \`media\` (\`sizes_desktop_filename\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`media_sizes_desktop_webp_sizes_desktop_webp_filename_idx\` ON \`media\` (\`sizes_desktop_webp_filename\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`media_sizes_desktop_avif_sizes_desktop_avif_filename_idx\` ON \`media\` (\`sizes_desktop_avif_filename\`);`,
	);
}
