# Payload CMS

resource "digitalocean_app" "cms" {
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
				value = var.database_connection_string
				type  = "SECRET"
			}

			env {
				key   = "PAYLOAD_SECRET"
				scope = "RUN_TIME"
				value = "488c95d0ec633cd2106ac90d"
				type  = "SECRET"
			}
		}
	}
}

output "digital_ocean_app_cms" {
	value = digitalocean_app.cms.urn
}
