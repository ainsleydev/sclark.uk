# Payload CMS

resource "digitalocean_app" "cms" {
	depends_on = [null_resource.turso_token]

	spec {
		name   = "${var.project_name}-cms"
		region = "lon"

		alert {
			rule = "DEPLOYMENT_FAILED"
		}

		domain {
			name = "cms.sclark.uk"
			zone = "cms.sclark.uk"
		}

		service {
			name               = "payload"
			dockerfile_path    = "cms/Dockerfile"
			source_dir         = "cms"
			instance_size_slug = "apps-s-1vcpu-0.5gb"
			instance_count     = 1
			http_port          = 3000

			github {
				branch         = "main"
				deploy_on_push = true
				repo           = var.repo_name
			}

			health_check {
				http_path = "/admin"
				failure_threshold = 20
				initial_delay_seconds = 90
			}

			log_destination {
				name = "Better Stack"

				logtail {
					token = logtail_source.cms_logs.token
				}
			}

			alert {
				value    = 75
				operator = "GREATER_THAN"
				window   = "TEN_MINUTES"
				rule     = "CPU_UTILIZATION"
			}

			env {
				key   = "PORT"
				scope = "RUN_TIME"
				value = "3000"
			}

			env {
				key   = "DATABASE_URI"
				scope = "RUN_TIME"
				value = data.local_file.token.content
				type  = "SECRET"
			}

			env {
				key   = "PAYLOAD_SECRET"
				scope = "RUN_TIME"
				value = var.payload_secret
				type  = "SECRET"
			}

			env {
				key   = "SPACES_BUCKET"
				scope = "RUN_TIME"
				value = digitalocean_spaces_bucket.store.name
			}

			env {
				key   = "SPACES_ACCESS_KEY"
				scope = "RUN_TIME"
				value = var.digital_ocean_config.spaces_access_key
				type  = "SECRET"
			}

			env {
				key   = "SPACES_SECRET_KEY"
				scope = "RUN_TIME"
				value = var.digital_ocean_config.spaces_secret_key
				type  = "SECRET"
			}
		}
	}
}

output "digital_ocean_app_cms" {
	value = digitalocean_app.cms.urn
}
