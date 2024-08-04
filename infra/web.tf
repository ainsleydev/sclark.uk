# Go Web App

resource "digitalocean_app" "web" {
	depends_on = [null_resource.turso_token]

	spec {
		name   = "${var.project_name}-web"
		region = "lon"

		alert {
			rule = "DEPLOYMENT_FAILED"
		}

		domain {
			name = "sclark.uk"
			zone = "sclark.uk"
		}

		domain {
			name = "www.sclark.uk"
			zone = "www.sclark.uk"
		}

		service {
			name               = "go"
			dockerfile_path    = "web/Dockerfile"
			source_dir         = "web"
			instance_size_slug = "apps-s-1vcpu-0.5gb"
			instance_count     = 1
			http_port          = 3000

			github {
				branch         = "main"
				deploy_on_push = true
				repo           = "ainsleydev/sclark.uk"
			}

			health_check {
				http_path             = "/"
				failure_threshold     = 20
				initial_delay_seconds = 90
			}

			log_destination {
				name = "Better Stack"

				logtail {
					token = logtail_source.web_logs.token
				}
			}

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
				value = "TODO"
				scope = "RUN_AND_BUILD_TIME"
				type  = "SECRET"
			}

			env {
				key   = "WEB3_FORMS_API_KEY"
				value = var.web3_forms_api_key
				scope = "RUN_AND_BUILD_TIME"
				type  = "SECRET"
			}
		}
	}
}
