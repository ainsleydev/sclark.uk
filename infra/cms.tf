# Payload CMS

resource "digitalocean_app" "cms" {
	spec {
		name   = "${var.project_name}-cms"
		region = "lon"

		alert {
			rule = "DEPLOYMENT_FAILED"
		}

# 		database {
# 			name       = "postgres"
# 			db_name    = var.database_config.name
# 			db_user    = var.database_config.user
# 			cluster_name = var.database_config.cluster_name
# 			engine     = var.database_config.engine
# 			production =  true
# 			version    = var.database_config.version
# 		}

		service {
			name               = "payload"
			dockerfile_path    = "cms/Dockerfile"
			source_dir         = "cms"
			instance_size_slug = "basic-xxs"
			instance_count     = 1
			http_port          = 3000

			github {
				branch         = "main"
				deploy_on_push = true
				repo           = var.repo_name
			}

			health_check {
				http_path = "/"
				failure_threshold = 20
				initial_delay_seconds = 90
			}

			log_destination {
				name = "Better Stack"

				logtail {
					token = logtail_source.logs.token
				}
			}

			alert {
				value    = 75
				operator = "GREATER_THAN"
				window   = "TEN_MINUTES"
				rule     = "CPU_UTILIZATION"
			}

			// See: https://www.digitalocean.com/community/questions/terraform-and-app-platform-env-variables
# 			env {
# 				key   = "DATABASE_URI"
# 				scope = "RUN_AND_BUILD_TIME"
# 				value = "$${postgres.DATABASE_URL}"
# 				type  = "GENERAL"
# 			}
#
# 			env {
# 				key   = "DATABASE_SSL"
# 				scope = "RUN_AND_BUILD_TIME"
# 				value = "true"
# 				type  = "GENERAL"
# 			}
#
# 			env {
# 				key   = "DATABASE_CA"
# 				scope = "RUN_AND_BUILD_TIME"
# 				value = "$${postgres.CA_CERT}"
# 				type  = "GENERAL"
# 			}
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

# # Create firewall rule for database replica
# # Force database firewall provisioning after app creation
# resource "digitalocean_database_firewall" "db_firewall" {
# 	cluster_id = var.database_config.id
#
# 	rule {
# 		type = "app"
# 		value = digitalocean_app.cms.id
# 	}
# }
