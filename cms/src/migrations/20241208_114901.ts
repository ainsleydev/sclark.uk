import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite';

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`pages_blocks_content_with_image_block\` RENAME COLUMN "imagePosition" TO "image_position";`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v_blocks_content_with_image_block\` RENAME COLUMN "imagePosition" TO "image_position";`,
	);
	await payload.db.drizzle.run(sql`CREATE TABLE \`payload_locked_documents\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`global_slug\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_locked_documents_global_slug_idx\` ON \`payload_locked_documents\` (\`global_slug\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_locked_documents_updated_at_idx\` ON \`payload_locked_documents\` (\`updated_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_locked_documents_created_at_idx\` ON \`payload_locked_documents\` (\`created_at\`);`,
	);
	await payload.db.drizzle.run(sql`CREATE TABLE \`payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`posts_id\` integer,
  	\`pages_id\` integer,
  	\`clients_id\` integer,
  	\`reviews_id\` integer,
  	\`portfolio_id\` integer,
  	\`portfolio_categories_id\` integer,
  	\`media_id\` integer,
  	\`users_id\` integer,
  	\`redirects_id\` integer,
  	\`forms_id\` integer,
  	\`form_submissions_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`posts_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`clients_id\`) REFERENCES \`clients\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`reviews_id\`) REFERENCES \`reviews\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`portfolio_id\`) REFERENCES \`portfolio\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`portfolio_categories_id\`) REFERENCES \`portfolio_categories\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`redirects_id\`) REFERENCES \`redirects\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`forms_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`form_submissions_id\`) REFERENCES \`form_submissions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_locked_documents_rels_posts_id_idx\` ON \`payload_locked_documents_rels\` (\`posts_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_locked_documents_rels_pages_id_idx\` ON \`payload_locked_documents_rels\` (\`pages_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_locked_documents_rels_clients_id_idx\` ON \`payload_locked_documents_rels\` (\`clients_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_locked_documents_rels_reviews_id_idx\` ON \`payload_locked_documents_rels\` (\`reviews_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_locked_documents_rels_portfolio_id_idx\` ON \`payload_locked_documents_rels\` (\`portfolio_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_locked_documents_rels_portfolio_categories_id_idx\` ON \`payload_locked_documents_rels\` (\`portfolio_categories_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_locked_documents_rels_redirects_id_idx\` ON \`payload_locked_documents_rels\` (\`redirects_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_locked_documents_rels_forms_id_idx\` ON \`payload_locked_documents_rels\` (\`forms_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_locked_documents_rels_form_submissions_id_idx\` ON \`payload_locked_documents_rels\` (\`form_submissions_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_content_with_image_block_image_idx\` ON \`pages_blocks_content_with_image_block\` (\`image_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_content_with_image_block_image_idx\` ON \`_pages_v_blocks_content_with_image_block\` (\`image_id\`);`,
	);
	await payload.db.drizzle.run(sql`PRAGMA foreign_keys=OFF;`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`__new_forms_emails\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`email_to\` text,
  	\`cc\` text,
  	\`bcc\` text,
  	\`reply_to\` text,
  	\`email_from\` text,
  	\`subject\` text DEFAULT 'You''''ve received a new message.' NOT NULL,
  	\`message\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
	await payload.db.drizzle.run(
		sql`INSERT INTO \`__new_forms_emails\`("_order", "_parent_id", "id", "email_to", "cc", "bcc", "reply_to", "email_from", "subject", "message") SELECT "_order", "_parent_id", "id", "email_to", "cc", "bcc", "reply_to", "email_from", "subject", "message" FROM \`forms_emails\`;`,
	);
	await payload.db.drizzle.run(sql`DROP TABLE \`forms_emails\`;`);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`__new_forms_emails\` RENAME TO \`forms_emails\`;`,
	);
	await payload.db.drizzle.run(sql`PRAGMA foreign_keys=ON;`);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`forms_emails_order_idx\` ON \`forms_emails\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`forms_emails_parent_id_idx\` ON \`forms_emails\` (\`_parent_id\`);`,
	);
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
		sql`CREATE INDEX \`media_updated_at_idx\` ON \`media\` (\`updated_at\`);`,
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
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`posts_thumbnail_idx\` ON \`posts\` (\`thumbnail_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`posts_meta_meta_image_idx\` ON \`posts\` (\`meta_image_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`posts_updated_at_idx\` ON \`posts\` (\`updated_at\`);`,
	);
	await payload.db.drizzle.run(sql`ALTER TABLE \`posts\` DROP COLUMN \`meta_private\`;`);
	await payload.db.drizzle.run(sql`ALTER TABLE \`posts\` DROP COLUMN \`meta_canonical_u_r_l\`;`);
	await payload.db.drizzle.run(sql`ALTER TABLE \`posts\` DROP COLUMN \`meta_structured_data\`;`);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`posts_rels_posts_id_idx\` ON \`posts_rels\` (\`posts_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_posts_v_parent_idx\` ON \`_posts_v\` (\`parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_posts_v_version_version_thumbnail_idx\` ON \`_posts_v\` (\`version_thumbnail_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_posts_v_version_meta_version_meta_image_idx\` ON \`_posts_v\` (\`version_meta_image_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_posts_v_version_version_updated_at_idx\` ON \`_posts_v\` (\`version_updated_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_posts_v\` DROP COLUMN \`version_meta_private\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_posts_v\` DROP COLUMN \`version_meta_canonical_u_r_l\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_posts_v\` DROP COLUMN \`version_meta_structured_data\`;`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_posts_v_rels_posts_id_idx\` ON \`_posts_v_rels\` (\`posts_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_contact_block_form_idx\` ON \`pages_blocks_contact_block\` (\`form_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_meta_meta_image_idx\` ON \`pages\` (\`meta_image_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_updated_at_idx\` ON \`pages\` (\`updated_at\`);`,
	);
	await payload.db.drizzle.run(sql`ALTER TABLE \`pages\` DROP COLUMN \`meta_private\`;`);
	await payload.db.drizzle.run(sql`ALTER TABLE \`pages\` DROP COLUMN \`meta_canonical_u_r_l\`;`);
	await payload.db.drizzle.run(sql`ALTER TABLE \`pages\` DROP COLUMN \`meta_structured_data\`;`);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_rels_clients_id_idx\` ON \`pages_rels\` (\`clients_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_rels_reviews_id_idx\` ON \`pages_rels\` (\`reviews_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_rels_portfolio_id_idx\` ON \`pages_rels\` (\`portfolio_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_contact_block_form_idx\` ON \`_pages_v_blocks_contact_block\` (\`form_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_parent_idx\` ON \`_pages_v\` (\`parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_version_meta_version_meta_image_idx\` ON \`_pages_v\` (\`version_meta_image_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_version_version_updated_at_idx\` ON \`_pages_v\` (\`version_updated_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v\` DROP COLUMN \`version_meta_private\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v\` DROP COLUMN \`version_meta_canonical_u_r_l\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v\` DROP COLUMN \`version_meta_structured_data\`;`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_rels_clients_id_idx\` ON \`_pages_v_rels\` (\`clients_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_rels_reviews_id_idx\` ON \`_pages_v_rels\` (\`reviews_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_rels_portfolio_id_idx\` ON \`_pages_v_rels\` (\`portfolio_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`clients_logo_idx\` ON \`clients\` (\`logo_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`clients_updated_at_idx\` ON \`clients\` (\`updated_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`reviews_updated_at_idx\` ON \`reviews\` (\`updated_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`portfolio_company_idx\` ON \`portfolio\` (\`company_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`portfolio_category_idx\` ON \`portfolio\` (\`category_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`portfolio_image_idx\` ON \`portfolio\` (\`image_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`portfolio_updated_at_idx\` ON \`portfolio\` (\`updated_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`portfolio_categories_updated_at_idx\` ON \`portfolio_categories\` (\`updated_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`users_updated_at_idx\` ON \`users\` (\`updated_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`redirects_updated_at_idx\` ON \`redirects\` (\`updated_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`forms_updated_at_idx\` ON \`forms\` (\`updated_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`form_submissions_form_idx\` ON \`form_submissions\` (\`form_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`form_submissions_updated_at_idx\` ON \`form_submissions\` (\`updated_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_preferences_updated_at_idx\` ON \`payload_preferences\` (\`updated_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_preferences_rels_users_id_idx\` ON \`payload_preferences_rels\` (\`users_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_migrations_updated_at_idx\` ON \`payload_migrations\` (\`updated_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`settings_logo_idx\` ON \`settings\` (\`logo_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`settings_meta_meta_image_idx\` ON \`settings\` (\`meta_image_id\`);`,
	);
	await payload.db.drizzle.run(sql`ALTER TABLE \`settings\` DROP COLUMN \`meta_private\`;`);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`settings\` DROP COLUMN \`meta_canonical_u_r_l\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`settings\` DROP COLUMN \`meta_structured_data\`;`,
	);
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`pages_blocks_content_with_image_block\` RENAME COLUMN "image_position" TO "imagePosition";`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v_blocks_content_with_image_block\` RENAME COLUMN "image_position" TO "imagePosition";`,
	);
	await payload.db.drizzle.run(sql`DROP TABLE \`payload_locked_documents\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`);
	await payload.db.drizzle.run(
		sql`DROP INDEX IF EXISTS \`pages_blocks_content_with_image_block_image_idx\`;`,
	);
	await payload.db.drizzle.run(
		sql`DROP INDEX IF EXISTS \`_pages_v_blocks_content_with_image_block_image_idx\`;`,
	);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`posts_thumbnail_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`posts_meta_meta_image_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`posts_updated_at_idx\`;`);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`posts\` ADD \`meta_private\` integer DEFAULT false;`,
	);
	await payload.db.drizzle.run(sql`ALTER TABLE \`posts\` ADD \`meta_canonical_u_r_l\` text;`);
	await payload.db.drizzle.run(sql`ALTER TABLE \`posts\` ADD \`meta_structured_data\` text;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`posts_rels_posts_id_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`_posts_v_parent_idx\`;`);
	await payload.db.drizzle.run(
		sql`DROP INDEX IF EXISTS \`_posts_v_version_version_thumbnail_idx\`;`,
	);
	await payload.db.drizzle.run(
		sql`DROP INDEX IF EXISTS \`_posts_v_version_meta_version_meta_image_idx\`;`,
	);
	await payload.db.drizzle.run(
		sql`DROP INDEX IF EXISTS \`_posts_v_version_version_updated_at_idx\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_posts_v\` ADD \`version_meta_private\` integer DEFAULT false;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_posts_v\` ADD \`version_meta_canonical_u_r_l\` text;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_posts_v\` ADD \`version_meta_structured_data\` text;`,
	);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`_posts_v_rels_posts_id_idx\`;`);
	await payload.db.drizzle.run(
		sql`DROP INDEX IF EXISTS \`pages_blocks_contact_block_form_idx\`;`,
	);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`pages_meta_meta_image_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`pages_updated_at_idx\`;`);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`pages\` ADD \`meta_private\` integer DEFAULT false;`,
	);
	await payload.db.drizzle.run(sql`ALTER TABLE \`pages\` ADD \`meta_canonical_u_r_l\` text;`);
	await payload.db.drizzle.run(sql`ALTER TABLE \`pages\` ADD \`meta_structured_data\` text;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`pages_rels_clients_id_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`pages_rels_reviews_id_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`pages_rels_portfolio_id_idx\`;`);
	await payload.db.drizzle.run(
		sql`DROP INDEX IF EXISTS \`_pages_v_blocks_contact_block_form_idx\`;`,
	);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`_pages_v_parent_idx\`;`);
	await payload.db.drizzle.run(
		sql`DROP INDEX IF EXISTS \`_pages_v_version_meta_version_meta_image_idx\`;`,
	);
	await payload.db.drizzle.run(
		sql`DROP INDEX IF EXISTS \`_pages_v_version_version_updated_at_idx\`;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v\` ADD \`version_meta_private\` integer DEFAULT false;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v\` ADD \`version_meta_canonical_u_r_l\` text;`,
	);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`_pages_v\` ADD \`version_meta_structured_data\` text;`,
	);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`_pages_v_rels_clients_id_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`_pages_v_rels_reviews_id_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`_pages_v_rels_portfolio_id_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`clients_logo_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`clients_updated_at_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`reviews_updated_at_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`portfolio_company_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`portfolio_category_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`portfolio_image_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`portfolio_updated_at_idx\`;`);
	await payload.db.drizzle.run(
		sql`DROP INDEX IF EXISTS \`portfolio_categories_updated_at_idx\`;`,
	);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`media_updated_at_idx\`;`);
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
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`users_updated_at_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`redirects_updated_at_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`forms_updated_at_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`form_submissions_form_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`form_submissions_updated_at_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`payload_preferences_updated_at_idx\`;`);
	await payload.db.drizzle.run(
		sql`DROP INDEX IF EXISTS \`payload_preferences_rels_users_id_idx\`;`,
	);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`payload_migrations_updated_at_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`settings_logo_idx\`;`);
	await payload.db.drizzle.run(sql`DROP INDEX IF EXISTS \`settings_meta_meta_image_idx\`;`);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`settings\` ADD \`meta_private\` integer DEFAULT false;`,
	);
	await payload.db.drizzle.run(sql`ALTER TABLE \`settings\` ADD \`meta_canonical_u_r_l\` text;`);
	await payload.db.drizzle.run(sql`ALTER TABLE \`settings\` ADD \`meta_structured_data\` text;`);
	await payload.db.drizzle.run(sql`PRAGMA foreign_keys=OFF;`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`__new_forms_emails\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`email_to\` text,
  	\`cc\` text,
  	\`bcc\` text,
  	\`reply_to\` text,
  	\`email_from\` text,
  	\`subject\` text DEFAULT 'You''ve received a new message.' NOT NULL,
  	\`message\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
	await payload.db.drizzle.run(
		sql`INSERT INTO \`__new_forms_emails\`("_order", "_parent_id", "id", "email_to", "cc", "bcc", "reply_to", "email_from", "subject", "message") SELECT "_order", "_parent_id", "id", "email_to", "cc", "bcc", "reply_to", "email_from", "subject", "message" FROM \`forms_emails\`;`,
	);
	await payload.db.drizzle.run(sql`DROP TABLE \`forms_emails\`;`);
	await payload.db.drizzle.run(
		sql`ALTER TABLE \`__new_forms_emails\` RENAME TO \`forms_emails\`;`,
	);
	await payload.db.drizzle.run(sql`PRAGMA foreign_keys=ON;`);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`forms_emails_order_idx\` ON \`forms_emails\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`forms_emails_parent_id_idx\` ON \`forms_emails\` (\`_parent_id\`);`,
	);
}
