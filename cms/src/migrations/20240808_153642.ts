import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite';

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
	await payload.db.drizzle.run(sql`CREATE TABLE \`posts_tags\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`id\` text PRIMARY KEY NOT NULL,
	\`tag\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`posts\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`title\` text,
	\`excerpt\` text,
	\`content\` text,
	\`thumbnail_id\` integer,
	\`meta_title\` text,
	\`meta_description\` text,
	\`meta_image_id\` integer,
	\`meta_private\` integer DEFAULT false,
	\`meta_canonical_u_r_l\` text,
	\`meta_structured_data\` text,
	\`published_at\` text,
	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`_status\` text DEFAULT 'draft',
	FOREIGN KEY (\`thumbnail_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (\`meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`posts_rels\` (
	\`id\` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	\`order\` integer,
	\`parent_id\` integer NOT NULL,
	\`path\` text NOT NULL,
	\`posts_id\` integer,
	FOREIGN KEY (\`parent_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (\`posts_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`_posts_v_version_tags\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`id\` integer PRIMARY KEY NOT NULL,
	\`tag\` text,
	\`_uuid\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_posts_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`_posts_v\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`parent_id\` integer,
	\`version_title\` text,
	\`version_excerpt\` text,
	\`version_content\` text,
	\`version_thumbnail_id\` integer,
	\`version_meta_title\` text,
	\`version_meta_description\` text,
	\`version_meta_image_id\` integer,
	\`version_meta_private\` integer DEFAULT false,
	\`version_meta_canonical_u_r_l\` text,
	\`version_meta_structured_data\` text,
	\`version_published_at\` text,
	\`version_updated_at\` text,
	\`version_created_at\` text,
	\`version__status\` text DEFAULT 'draft',
	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`latest\` integer,
	FOREIGN KEY (\`parent_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (\`version_thumbnail_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (\`version_meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`_posts_v_rels\` (
	\`id\` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	\`order\` integer,
	\`parent_id\` integer NOT NULL,
	\`path\` text NOT NULL,
	\`posts_id\` integer,
	FOREIGN KEY (\`parent_id\`) REFERENCES \`_posts_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (\`posts_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`pages_blocks_content_block\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`_path\` text NOT NULL,
	\`id\` text PRIMARY KEY NOT NULL,
	\`identifier\` text,
	\`style\` text DEFAULT 'centered',
	\`centre_align\` integer DEFAULT false,
	\`content\` text,
	\`content_html\` text,
	\`block_name\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`pages_blocks_faqs_block_faqs\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` text NOT NULL,
	\`id\` text PRIMARY KEY NOT NULL,
	\`question\` text,
	\`answer\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_faqs_block\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`pages_blocks_faqs_block\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`_path\` text NOT NULL,
	\`id\` text PRIMARY KEY NOT NULL,
	\`identifier\` text,
	\`block_name\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`pages_blocks_content_with_image_block\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`_path\` text NOT NULL,
	\`id\` text PRIMARY KEY NOT NULL,
	\`identifier\` text,
	\`imagePosition\` text DEFAULT 'left',
	\`sticky\` integer DEFAULT false,
	\`image_id\` integer,
	\`block_name\` text,
	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`pages_blocks_gradient_block\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`_path\` text NOT NULL,
	\`id\` text PRIMARY KEY NOT NULL,
	\`identifier\` text,
	\`colour\` text DEFAULT 'pink',
	\`block_name\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`pages_blocks_logos_block\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`_path\` text NOT NULL,
	\`id\` text PRIMARY KEY NOT NULL,
	\`identifier\` text,
	\`title\` text,
	\`greyscale\` integer,
	\`block_name\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`pages_blocks_reviews_block\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`_path\` text NOT NULL,
	\`id\` text PRIMARY KEY NOT NULL,
	\`identifier\` text,
	\`title\` text,
	\`content\` text,
	\`block_name\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`pages_blocks_portfolio_block\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`_path\` text NOT NULL,
	\`id\` text PRIMARY KEY NOT NULL,
	\`identifier\` text,
	\`title\` text,
	\`content\` text,
	\`block_name\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`pages_blocks_contact_block\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`_path\` text NOT NULL,
	\`id\` text PRIMARY KEY NOT NULL,
	\`identifier\` text,
	\`title\` text,
	\`content\` text,
	\`include_social\` integer DEFAULT true,
	\`form_id\` integer,
	\`block_name\` text,
	FOREIGN KEY (\`form_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`pages\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`hero_title\` text,
	\`hero_lead\` text,
	\`meta_title\` text,
	\`meta_description\` text,
	\`meta_image_id\` integer,
	\`meta_private\` integer DEFAULT false,
	\`meta_canonical_u_r_l\` text,
	\`meta_structured_data\` text,
	\`is_home\` integer DEFAULT false,
	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`_status\` text DEFAULT 'draft',
	FOREIGN KEY (\`meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`pages_rels\` (
	\`id\` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	\`order\` integer,
	\`parent_id\` integer NOT NULL,
	\`path\` text NOT NULL,
	\`clients_id\` integer,
	\`reviews_id\` integer,
	\`portfolio_id\` integer,
	FOREIGN KEY (\`parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (\`clients_id\`) REFERENCES \`clients\`(\`id\`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (\`reviews_id\`) REFERENCES \`reviews\`(\`id\`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (\`portfolio_id\`) REFERENCES \`portfolio\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`_pages_v_blocks_content_block\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`_path\` text NOT NULL,
	\`id\` integer PRIMARY KEY NOT NULL,
	\`identifier\` text,
	\`style\` text DEFAULT 'centered',
	\`centre_align\` integer DEFAULT false,
	\`content\` text,
	\`content_html\` text,
	\`_uuid\` text,
	\`block_name\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`_pages_v_blocks_faqs_block_faqs\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`id\` integer PRIMARY KEY NOT NULL,
	\`question\` text,
	\`answer\` text,
	\`_uuid\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_faqs_block\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`_pages_v_blocks_faqs_block\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`_path\` text NOT NULL,
	\`id\` integer PRIMARY KEY NOT NULL,
	\`identifier\` text,
	\`_uuid\` text,
	\`block_name\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`_pages_v_blocks_content_with_image_block\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`_path\` text NOT NULL,
	\`id\` integer PRIMARY KEY NOT NULL,
	\`identifier\` text,
	\`imagePosition\` text DEFAULT 'left',
	\`sticky\` integer DEFAULT false,
	\`image_id\` integer,
	\`_uuid\` text,
	\`block_name\` text,
	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`_pages_v_blocks_gradient_block\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`_path\` text NOT NULL,
	\`id\` integer PRIMARY KEY NOT NULL,
	\`identifier\` text,
	\`colour\` text DEFAULT 'pink',
	\`_uuid\` text,
	\`block_name\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`_pages_v_blocks_logos_block\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`_path\` text NOT NULL,
	\`id\` integer PRIMARY KEY NOT NULL,
	\`identifier\` text,
	\`title\` text,
	\`greyscale\` integer,
	\`_uuid\` text,
	\`block_name\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`_pages_v_blocks_reviews_block\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`_path\` text NOT NULL,
	\`id\` integer PRIMARY KEY NOT NULL,
	\`identifier\` text,
	\`title\` text,
	\`content\` text,
	\`_uuid\` text,
	\`block_name\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`_pages_v_blocks_portfolio_block\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`_path\` text NOT NULL,
	\`id\` integer PRIMARY KEY NOT NULL,
	\`identifier\` text,
	\`title\` text,
	\`content\` text,
	\`_uuid\` text,
	\`block_name\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`_pages_v_blocks_contact_block\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`_path\` text NOT NULL,
	\`id\` integer PRIMARY KEY NOT NULL,
	\`identifier\` text,
	\`title\` text,
	\`content\` text,
	\`include_social\` integer DEFAULT true,
	\`form_id\` integer,
	\`_uuid\` text,
	\`block_name\` text,
	FOREIGN KEY (\`form_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`_pages_v\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`parent_id\` integer,
	\`version_hero_title\` text,
	\`version_hero_lead\` text,
	\`version_meta_title\` text,
	\`version_meta_description\` text,
	\`version_meta_image_id\` integer,
	\`version_meta_private\` integer DEFAULT false,
	\`version_meta_canonical_u_r_l\` text,
	\`version_meta_structured_data\` text,
	\`version_is_home\` integer DEFAULT false,
	\`version_updated_at\` text,
	\`version_created_at\` text,
	\`version__status\` text DEFAULT 'draft',
	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`latest\` integer,
	FOREIGN KEY (\`parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (\`version_meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`_pages_v_rels\` (
	\`id\` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	\`order\` integer,
	\`parent_id\` integer NOT NULL,
	\`path\` text NOT NULL,
	\`clients_id\` integer,
	\`reviews_id\` integer,
	\`portfolio_id\` integer,
	FOREIGN KEY (\`parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (\`clients_id\`) REFERENCES \`clients\`(\`id\`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (\`reviews_id\`) REFERENCES \`reviews\`(\`id\`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (\`portfolio_id\`) REFERENCES \`portfolio\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`clients\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`name\` text NOT NULL,
	\`url\` text NOT NULL,
	\`logo_id\` integer NOT NULL,
	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`reviews\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`content\` text NOT NULL,
	\`author_first_name\` text NOT NULL,
	\`author_last_name\` text NOT NULL,
	\`author_description\` text NOT NULL,
	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`portfolio\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`title\` text NOT NULL,
	\`url\` text NOT NULL,
	\`date\` text NOT NULL,
	\`company_id\` integer NOT NULL,
	\`category_id\` integer NOT NULL,
	\`image_id\` integer NOT NULL,
	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	FOREIGN KEY (\`company_id\`) REFERENCES \`clients\`(\`id\`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (\`category_id\`) REFERENCES \`portfolio_categories\`(\`id\`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`portfolio_categories\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`title\` text NOT NULL,
	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`media\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`alt\` text NOT NULL,
	\`caption\` text,
	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`url\` text,
	\`thumbnail_u_r_l\` text,
	\`filename\` text,
	\`mime_type\` text,
	\`filesize\` numeric,
	\`width\` numeric,
	\`height\` numeric,
	\`focal_x\` numeric,
	\`focal_y\` numeric,
	\`sizes_webp_url\` text,
	\`sizes_webp_width\` numeric,
	\`sizes_webp_height\` numeric,
	\`sizes_webp_mime_type\` text,
	\`sizes_webp_filesize\` numeric,
	\`sizes_webp_filename\` text,
	\`sizes_avif_url\` text,
	\`sizes_avif_width\` numeric,
	\`sizes_avif_height\` numeric,
	\`sizes_avif_mime_type\` text,
	\`sizes_avif_filesize\` numeric,
	\`sizes_avif_filename\` text,
	\`sizes_thumbnail_url\` text,
	\`sizes_thumbnail_width\` numeric,
	\`sizes_thumbnail_height\` numeric,
	\`sizes_thumbnail_mime_type\` text,
	\`sizes_thumbnail_filesize\` numeric,
	\`sizes_thumbnail_filename\` text,
	\`sizes_thumbnail_webp_url\` text,
	\`sizes_thumbnail_webp_width\` numeric,
	\`sizes_thumbnail_webp_height\` numeric,
	\`sizes_thumbnail_webp_mime_type\` text,
	\`sizes_thumbnail_webp_filesize\` numeric,
	\`sizes_thumbnail_webp_filename\` text,
	\`sizes_thumbnail_avif_url\` text,
	\`sizes_thumbnail_avif_width\` numeric,
	\`sizes_thumbnail_avif_height\` numeric,
	\`sizes_thumbnail_avif_mime_type\` text,
	\`sizes_thumbnail_avif_filesize\` numeric,
	\`sizes_thumbnail_avif_filename\` text,
	\`sizes_mobile_url\` text,
	\`sizes_mobile_width\` numeric,
	\`sizes_mobile_height\` numeric,
	\`sizes_mobile_mime_type\` text,
	\`sizes_mobile_filesize\` numeric,
	\`sizes_mobile_filename\` text,
	\`sizes_mobile_webp_url\` text,
	\`sizes_mobile_webp_width\` numeric,
	\`sizes_mobile_webp_height\` numeric,
	\`sizes_mobile_webp_mime_type\` text,
	\`sizes_mobile_webp_filesize\` numeric,
	\`sizes_mobile_webp_filename\` text,
	\`sizes_mobile_avif_url\` text,
	\`sizes_mobile_avif_width\` numeric,
	\`sizes_mobile_avif_height\` numeric,
	\`sizes_mobile_avif_mime_type\` text,
	\`sizes_mobile_avif_filesize\` numeric,
	\`sizes_mobile_avif_filename\` text,
	\`sizes_tablet_url\` text,
	\`sizes_tablet_width\` numeric,
	\`sizes_tablet_height\` numeric,
	\`sizes_tablet_mime_type\` text,
	\`sizes_tablet_filesize\` numeric,
	\`sizes_tablet_filename\` text,
	\`sizes_tablet_webp_url\` text,
	\`sizes_tablet_webp_width\` numeric,
	\`sizes_tablet_webp_height\` numeric,
	\`sizes_tablet_webp_mime_type\` text,
	\`sizes_tablet_webp_filesize\` numeric,
	\`sizes_tablet_webp_filename\` text,
	\`sizes_tablet_avif_url\` text,
	\`sizes_tablet_avif_width\` numeric,
	\`sizes_tablet_avif_height\` numeric,
	\`sizes_tablet_avif_mime_type\` text,
	\`sizes_tablet_avif_filesize\` numeric,
	\`sizes_tablet_avif_filename\` text
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`users\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`name\` text NOT NULL,
	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`enable_a_p_i_key\` integer,
	\`api_key\` text,
	\`api_key_index\` text,
	\`email\` text NOT NULL,
	\`reset_password_token\` text,
	\`reset_password_expiration\` text,
	\`salt\` text,
	\`hash\` text,
	\`login_attempts\` numeric DEFAULT 0,
	\`lock_until\` text
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`redirects\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`from\` text NOT NULL,
	\`to\` text NOT NULL,
	\`code\` text DEFAULT '301' NOT NULL,
	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`forms_blocks_email\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`_path\` text NOT NULL,
	\`id\` text PRIMARY KEY NOT NULL,
	\`name\` text NOT NULL,
	\`label\` text,
	\`width\` numeric,
	\`required\` integer,
	\`block_name\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`forms_blocks_text\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`_path\` text NOT NULL,
	\`id\` text PRIMARY KEY NOT NULL,
	\`name\` text NOT NULL,
	\`label\` text,
	\`width\` numeric,
	\`default_value\` text,
	\`required\` integer,
	\`block_name\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`forms_blocks_textarea\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`_path\` text NOT NULL,
	\`id\` text PRIMARY KEY NOT NULL,
	\`name\` text NOT NULL,
	\`label\` text,
	\`width\` numeric,
	\`default_value\` text,
	\`required\` integer,
	\`block_name\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`forms_emails\` (
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
	await payload.db.drizzle.run(sql`CREATE TABLE \`forms\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`heading\` text NOT NULL,
	\`content\` text,
	\`title\` text NOT NULL,
	\`submit_button_label\` text,
	\`redirect_url\` text,
	\`confirmation_message\` text,
	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`form_submissions_submission_data\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`id\` text PRIMARY KEY NOT NULL,
	\`field\` text NOT NULL,
	\`value\` text NOT NULL,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`form_submissions\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`form_submissions\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`form_id\` integer NOT NULL,
	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	FOREIGN KEY (\`form_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE set null
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`payload_preferences\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`key\` text,
	\`value\` text,
	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`payload_preferences_rels\` (
	\`id\` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	\`order\` integer,
	\`parent_id\` integer NOT NULL,
	\`path\` text NOT NULL,
	\`users_id\` integer,
	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_preferences\`(\`id\`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`payload_migrations\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`name\` text,
	\`batch\` numeric,
	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`settings\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`site_name\` text,
	\`locale\` text DEFAULT 'en_GB',
	\`tag_line\` text,
	\`logo_id\` integer,
	\`robots\` text,
	\`code_injection_head\` text,
	\`code_injection_footer\` text,
	\`contact_email\` text,
	\`contact_telephone\` text,
	\`address_line1\` text,
	\`address_line2\` text,
	\`address_city\` text,
	\`address_county\` text,
	\`address_postcode\` text,
	\`address_country\` text,
	\`social_linked_in\` text,
	\`social_x\` text,
	\`social_facebook\` text,
	\`social_instagram\` text,
	\`social_youtube\` text,
	\`social_tiktok\` text,
	\`maintenance_enabled\` integer,
	\`maintenance_title\` text,
	\`maintenance_content\` text,
	\`footer_title\` text,
	\`footer_content\` text,
	\`meta_title\` text,
	\`meta_description\` text,
	\`meta_image_id\` integer,
	\`meta_private\` integer DEFAULT false,
	\`meta_canonical_u_r_l\` text,
	\`meta_structured_data\` text,
	\`updated_at\` text,
	\`created_at\` text,
	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (\`meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`navigation_header\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`id\` text PRIMARY KEY NOT NULL,
	\`title\` text NOT NULL,
	\`url\` text NOT NULL,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`navigation\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
`);
	await payload.db.drizzle.run(sql`CREATE TABLE \`navigation\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`updated_at\` text,
	\`created_at\` text
);
`);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`posts_tags_order_idx\` ON \`posts_tags\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`posts_tags_parent_id_idx\` ON \`posts_tags\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`posts_created_at_idx\` ON \`posts\` (\`created_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`posts__status_idx\` ON \`posts\` (\`_status\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`posts_rels_order_idx\` ON \`posts_rels\` (\`order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`posts_rels_parent_idx\` ON \`posts_rels\` (\`parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`posts_rels_path_idx\` ON \`posts_rels\` (\`path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_posts_v_version_tags_order_idx\` ON \`_posts_v_version_tags\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_posts_v_version_tags_parent_id_idx\` ON \`_posts_v_version_tags\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_posts_v_version_version_created_at_idx\` ON \`_posts_v\` (\`version_created_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_posts_v_version_version__status_idx\` ON \`_posts_v\` (\`version__status\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_posts_v_created_at_idx\` ON \`_posts_v\` (\`created_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_posts_v_updated_at_idx\` ON \`_posts_v\` (\`updated_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_posts_v_latest_idx\` ON \`_posts_v\` (\`latest\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_posts_v_rels_order_idx\` ON \`_posts_v_rels\` (\`order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_posts_v_rels_parent_idx\` ON \`_posts_v_rels\` (\`parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_posts_v_rels_path_idx\` ON \`_posts_v_rels\` (\`path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_content_block_order_idx\` ON \`pages_blocks_content_block\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_content_block_parent_id_idx\` ON \`pages_blocks_content_block\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_content_block_path_idx\` ON \`pages_blocks_content_block\` (\`_path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_faqs_block_faqs_order_idx\` ON \`pages_blocks_faqs_block_faqs\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_faqs_block_faqs_parent_id_idx\` ON \`pages_blocks_faqs_block_faqs\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_faqs_block_order_idx\` ON \`pages_blocks_faqs_block\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_faqs_block_parent_id_idx\` ON \`pages_blocks_faqs_block\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_faqs_block_path_idx\` ON \`pages_blocks_faqs_block\` (\`_path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_content_with_image_block_order_idx\` ON \`pages_blocks_content_with_image_block\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_content_with_image_block_parent_id_idx\` ON \`pages_blocks_content_with_image_block\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_content_with_image_block_path_idx\` ON \`pages_blocks_content_with_image_block\` (\`_path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_gradient_block_order_idx\` ON \`pages_blocks_gradient_block\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_gradient_block_parent_id_idx\` ON \`pages_blocks_gradient_block\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_gradient_block_path_idx\` ON \`pages_blocks_gradient_block\` (\`_path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_logos_block_order_idx\` ON \`pages_blocks_logos_block\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_logos_block_parent_id_idx\` ON \`pages_blocks_logos_block\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_logos_block_path_idx\` ON \`pages_blocks_logos_block\` (\`_path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_reviews_block_order_idx\` ON \`pages_blocks_reviews_block\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_reviews_block_parent_id_idx\` ON \`pages_blocks_reviews_block\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_reviews_block_path_idx\` ON \`pages_blocks_reviews_block\` (\`_path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_portfolio_block_order_idx\` ON \`pages_blocks_portfolio_block\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_portfolio_block_parent_id_idx\` ON \`pages_blocks_portfolio_block\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_portfolio_block_path_idx\` ON \`pages_blocks_portfolio_block\` (\`_path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_contact_block_order_idx\` ON \`pages_blocks_contact_block\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_contact_block_parent_id_idx\` ON \`pages_blocks_contact_block\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_blocks_contact_block_path_idx\` ON \`pages_blocks_contact_block\` (\`_path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE UNIQUE INDEX \`pages_is_home_idx\` ON \`pages\` (\`is_home\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_created_at_idx\` ON \`pages\` (\`created_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages__status_idx\` ON \`pages\` (\`_status\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_rels_order_idx\` ON \`pages_rels\` (\`order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_rels_parent_idx\` ON \`pages_rels\` (\`parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`pages_rels_path_idx\` ON \`pages_rels\` (\`path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_content_block_order_idx\` ON \`_pages_v_blocks_content_block\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_content_block_parent_id_idx\` ON \`_pages_v_blocks_content_block\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_content_block_path_idx\` ON \`_pages_v_blocks_content_block\` (\`_path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_faqs_block_faqs_order_idx\` ON \`_pages_v_blocks_faqs_block_faqs\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_faqs_block_faqs_parent_id_idx\` ON \`_pages_v_blocks_faqs_block_faqs\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_faqs_block_order_idx\` ON \`_pages_v_blocks_faqs_block\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_faqs_block_parent_id_idx\` ON \`_pages_v_blocks_faqs_block\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_faqs_block_path_idx\` ON \`_pages_v_blocks_faqs_block\` (\`_path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_content_with_image_block_order_idx\` ON \`_pages_v_blocks_content_with_image_block\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_content_with_image_block_parent_id_idx\` ON \`_pages_v_blocks_content_with_image_block\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_content_with_image_block_path_idx\` ON \`_pages_v_blocks_content_with_image_block\` (\`_path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_gradient_block_order_idx\` ON \`_pages_v_blocks_gradient_block\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_gradient_block_parent_id_idx\` ON \`_pages_v_blocks_gradient_block\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_gradient_block_path_idx\` ON \`_pages_v_blocks_gradient_block\` (\`_path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_logos_block_order_idx\` ON \`_pages_v_blocks_logos_block\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_logos_block_parent_id_idx\` ON \`_pages_v_blocks_logos_block\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_logos_block_path_idx\` ON \`_pages_v_blocks_logos_block\` (\`_path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_reviews_block_order_idx\` ON \`_pages_v_blocks_reviews_block\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_reviews_block_parent_id_idx\` ON \`_pages_v_blocks_reviews_block\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_reviews_block_path_idx\` ON \`_pages_v_blocks_reviews_block\` (\`_path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_portfolio_block_order_idx\` ON \`_pages_v_blocks_portfolio_block\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_portfolio_block_parent_id_idx\` ON \`_pages_v_blocks_portfolio_block\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_portfolio_block_path_idx\` ON \`_pages_v_blocks_portfolio_block\` (\`_path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_contact_block_order_idx\` ON \`_pages_v_blocks_contact_block\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_contact_block_parent_id_idx\` ON \`_pages_v_blocks_contact_block\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_blocks_contact_block_path_idx\` ON \`_pages_v_blocks_contact_block\` (\`_path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_version_version_is_home_idx\` ON \`_pages_v\` (\`version_is_home\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_version_version_created_at_idx\` ON \`_pages_v\` (\`version_created_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_version_version__status_idx\` ON \`_pages_v\` (\`version__status\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_created_at_idx\` ON \`_pages_v\` (\`created_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_updated_at_idx\` ON \`_pages_v\` (\`updated_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_latest_idx\` ON \`_pages_v\` (\`latest\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_rels_order_idx\` ON \`_pages_v_rels\` (\`order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_rels_parent_idx\` ON \`_pages_v_rels\` (\`parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`_pages_v_rels_path_idx\` ON \`_pages_v_rels\` (\`path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`clients_created_at_idx\` ON \`clients\` (\`created_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`reviews_created_at_idx\` ON \`reviews\` (\`created_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`portfolio_created_at_idx\` ON \`portfolio\` (\`created_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`portfolio_categories_created_at_idx\` ON \`portfolio_categories\` (\`created_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`media_created_at_idx\` ON \`media\` (\`created_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE UNIQUE INDEX \`media_filename_idx\` ON \`media\` (\`filename\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`media_sizes_webp_sizes_webp_filename_idx\` ON \`media\` (\`sizes_webp_filename\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`media_sizes_avif_sizes_avif_filename_idx\` ON \`media\` (\`sizes_avif_filename\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`media_sizes_thumbnail_sizes_thumbnail_filename_idx\` ON \`media\` (\`sizes_thumbnail_filename\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`media_sizes_thumbnail_webp_sizes_thumbnail_webp_filename_idx\` ON \`media\` (\`sizes_thumbnail_webp_filename\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`media_sizes_thumbnail_avif_sizes_thumbnail_avif_filename_idx\` ON \`media\` (\`sizes_thumbnail_avif_filename\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`media_sizes_mobile_sizes_mobile_filename_idx\` ON \`media\` (\`sizes_mobile_filename\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`media_sizes_mobile_webp_sizes_mobile_webp_filename_idx\` ON \`media\` (\`sizes_mobile_webp_filename\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`media_sizes_mobile_avif_sizes_mobile_avif_filename_idx\` ON \`media\` (\`sizes_mobile_avif_filename\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`media_sizes_tablet_sizes_tablet_filename_idx\` ON \`media\` (\`sizes_tablet_filename\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`media_sizes_tablet_webp_sizes_tablet_webp_filename_idx\` ON \`media\` (\`sizes_tablet_webp_filename\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`media_sizes_tablet_avif_sizes_tablet_avif_filename_idx\` ON \`media\` (\`sizes_tablet_avif_filename\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`users_created_at_idx\` ON \`users\` (\`created_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE UNIQUE INDEX \`users_email_idx\` ON \`users\` (\`email\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`redirects_from_idx\` ON \`redirects\` (\`from\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`redirects_created_at_idx\` ON \`redirects\` (\`created_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`forms_blocks_email_order_idx\` ON \`forms_blocks_email\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`forms_blocks_email_parent_id_idx\` ON \`forms_blocks_email\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`forms_blocks_email_path_idx\` ON \`forms_blocks_email\` (\`_path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`forms_blocks_text_order_idx\` ON \`forms_blocks_text\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`forms_blocks_text_parent_id_idx\` ON \`forms_blocks_text\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`forms_blocks_text_path_idx\` ON \`forms_blocks_text\` (\`_path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`forms_blocks_textarea_order_idx\` ON \`forms_blocks_textarea\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`forms_blocks_textarea_parent_id_idx\` ON \`forms_blocks_textarea\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`forms_blocks_textarea_path_idx\` ON \`forms_blocks_textarea\` (\`_path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`forms_emails_order_idx\` ON \`forms_emails\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`forms_emails_parent_id_idx\` ON \`forms_emails\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`forms_created_at_idx\` ON \`forms\` (\`created_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`form_submissions_submission_data_order_idx\` ON \`form_submissions_submission_data\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`form_submissions_submission_data_parent_id_idx\` ON \`form_submissions_submission_data\` (\`_parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`form_submissions_created_at_idx\` ON \`form_submissions\` (\`created_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_preferences_key_idx\` ON \`payload_preferences\` (\`key\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_preferences_created_at_idx\` ON \`payload_preferences\` (\`created_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_preferences_rels_order_idx\` ON \`payload_preferences_rels\` (\`order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_preferences_rels_parent_idx\` ON \`payload_preferences_rels\` (\`parent_id\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_preferences_rels_path_idx\` ON \`payload_preferences_rels\` (\`path\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`payload_migrations_created_at_idx\` ON \`payload_migrations\` (\`created_at\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`navigation_header_order_idx\` ON \`navigation_header\` (\`_order\`);`,
	);
	await payload.db.drizzle.run(
		sql`CREATE INDEX \`navigation_header_parent_id_idx\` ON \`navigation_header\` (\`_parent_id\`);`,
	);
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
	await payload.db.drizzle.run(sql`DROP TABLE \`posts_tags\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`posts\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`posts_rels\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`_posts_v_version_tags\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`_posts_v\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`_posts_v_rels\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`pages_blocks_content_block\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`pages_blocks_faqs_block_faqs\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`pages_blocks_faqs_block\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`pages_blocks_content_with_image_block\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`pages_blocks_gradient_block\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`pages_blocks_logos_block\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`pages_blocks_reviews_block\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`pages_blocks_portfolio_block\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`pages_blocks_contact_block\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`pages\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`pages_rels\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`_pages_v_blocks_content_block\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`_pages_v_blocks_faqs_block_faqs\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`_pages_v_blocks_faqs_block\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`_pages_v_blocks_content_with_image_block\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`_pages_v_blocks_gradient_block\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`_pages_v_blocks_logos_block\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`_pages_v_blocks_reviews_block\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`_pages_v_blocks_portfolio_block\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`_pages_v_blocks_contact_block\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`_pages_v\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`_pages_v_rels\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`clients\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`reviews\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`portfolio\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`portfolio_categories\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`media\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`users\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`redirects\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`forms_blocks_email\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`forms_blocks_text\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`forms_blocks_textarea\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`forms_emails\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`forms\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`form_submissions_submission_data\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`form_submissions\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`payload_preferences\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`payload_preferences_rels\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`payload_migrations\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`settings\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`navigation_header\`;`);
	await payload.db.drizzle.run(sql`DROP TABLE \`navigation\`;`);
}
