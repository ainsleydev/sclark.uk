# Go

resource "digitalocean_app" "s-clark-web" {
	spec {
		name   = "s-clark-web"
		region = "lon"

		domain {
			name = "sclark.uk"
		}

		domain {
			name = "www.sclark.uk"
		}

		service {
			name               = "go"
			dockerfile_path    = "web/Dockerfile"
			source_dir         = "web"
			instance_size_slug = "basic-xxs"
			instance_count     = 1
			http_port          = 3000

			env {
				key   = "APP_ENV"
				value = "PRODUCTION"
				scope = "RUN_AND_BUILD_TIME"
			}

			env {
				key   = "APP_PORT"
				value = "3000"
				scope = "RUN_AND_BUILD_TIME"
			}

			env {
				key   = "APP_URL"
				value = "https://sclark.uk"
				scope = "RUN_AND_BUILD_TIME"
			}

			env {
				key   = "PAYLOAD_URL"
				value = "https://cms.sclark.uk"
				scope = "RUN_AND_BUILD_TIME"
			}

			env {
				key   = "PAYLOAD_API_KEY"
				value = "https://cms.sclark.uk"
				scope = "RUN_AND_BUILD_TIME"
				type  = "SECRET"
			}

			github {
				branch         = "main"
				deploy_on_push = true
				repo           = "ainsleydev/sclark.uk"
			}

			health_check {
				http_path = "/"
			}

			log_destination {
				name = "Better Stack"

				logtail {
					token = var.better_stack_config.api_key
				}
			}
		}
	}
}
