terraform {
	required_providers {
		digitalocean = {
			source  = "digitalocean/digitalocean"
			version = "~> 2.0"
		}
	}
}

locals {
	env_vars = { for tuple in regexall("(.*?)=(.*)", file("${path.module}/../.env")) : tuple[0] => tuple[1] }
}

output "env_vars" {
	value = local.env_vars
}

provider "digitalocean" {
	token = local.env_vars["DO_API_KEY"]
	spaces_access_id = local.env_vars["DO_SPACES_ACCESS_KEY"]
	spaces_secret_key = local.env_vars["DO_SPACES_SECRET_KEY"]
}

resource "digitalocean_spaces_bucket" "s-clark-store" {
	name   = "s-clark-store"
	region = "ams3"
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

#resource "digitalocean_app" "go_app" {
#	spec {
#		name   = "go-api-app"
#		region = "lon"
#
#		service {
#			name             = "my-go-api"
#			dockerfile_path = "backend/Dockerfile"
#			source_dir = "backend"
#			environment_slug = "go"
#			instance_size_slug = "basic-xxs"
#			instance_count = 1
#			http_port = 3000
#
#			env {
#				key = "Test"
#				value = "Test"
#				scope = "RUN_AND_BUILD_TIME"
#				type = "SECRET"
#			}
#
#			github {
#				branch         = "main"
#				deploy_on_push = true
#				repo = "ainsleydev/sclark.uk"
#			}
#
#
#			health_check {
#				http_path = "/"
#			}
#
#			log_destination {
#				name = "Better Stack"
#
#				logtail {
#					endpoint = "syslog+tls://example.com:12345"
#					token    = "TOKEN"
#				}
#			}
#		}
#	}
#}


output "spaces_cdn" {
	value = digitalocean_cdn.s-clark-cdn
}
