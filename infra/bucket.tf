# Bucket

resource "digitalocean_spaces_bucket" "s-clark-store" {
	name   = "s-clark-store"
	region = "ams3"
	acl    = "public-read"
}

resource "digitalocean_spaces_bucket_cors_configuration" "s-clark-store-cors" {
	bucket = digitalocean_spaces_bucket.s-clark-store.id
	region = digitalocean_spaces_bucket.s-clark-store.region

	cors_rule {
		allowed_headers = ["*"]
		allowed_methods = ["GET"]
		allowed_origins = ["*"]
		max_age_seconds = 31536000
	}
}

resource "digitalocean_cdn" "s-clark-cdn" {
	origin = digitalocean_spaces_bucket.s-clark-store.bucket_domain_name
}

output "spaces_cdn" {
	value = digitalocean_cdn.s-clark-cdn
}
