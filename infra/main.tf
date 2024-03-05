terraform {
	required_providers {
		digitalocean = {
			source  = "digitalocean/digitalocean"
			version = "~> 2.0"
		}
	}
}

provider "digitalocean" {
	token = var.do_token
}

# DigitalOcean Spaces Bucket
resource "digitalocean_spaces_bucket" "s_clark_store" {
	name   = "my-bucket"
	region = "nyc3"

	cors_rule {
		allowed_headers = ["*"]
		allowed_methods = ["GET"]
		allowed_origins = ["*"]
		max_age_seconds = 31536000
	}
}

# DigitalOcean App for GoLang API
resource "digitalocean_app" "go_app" {
	spec {
		name   = "go-api-app"
		region = "lon"

		service {
			name             = "my-go-api"
			dockerfile_path = "backend/Dockerfile"
			source_dir = "backend"
			environment_slug = "go"
			instance_size_slug = "basic-xxs"
			instance_count = 1
			http_port = 3000

			env {
				key = "Test"
				value = "Test"
				scope = "RUN_AND_BUILD_TIME"
				type = "SECRET"
			}

			github {
				branch         = "main"
				deploy_on_push = true
				repo = "ainsleydev/sclark.uk"
			}


			health_check {
				http_path = "/"
			}

			log_destination {
				name = "Better Stack"

				logtail {
					endpoint = "syslog+tls://example.com:12345"
					token    = "TOKEN"
				}
			}
		}
	}
}

# DigitalOcean App for Node API
resource "digitalocean_app" "node_app" {
	spec {
		name   = "node-api-app"
		region = "nyc3"

		service {
			name             = "my-node-api"
			environment_slug = "nodejs"

			# Add any other specific configuration for your Node API app
		}
	}
}
