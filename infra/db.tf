# Database

# resource "null_resource" "turso_database" {
# 	triggers = {
# 		db_name = var.turso_config.db_name
# 	}
#
# 	provisioner "local-exec" {
# 		when = create
# 		command = "turso db create ${self.triggers.db_name}"
# 	}
#
# 	provisioner "local-exec" {
# 		when    = destroy
# 		command = "turso db destroy ${self.triggers.db_name} --yes"
# 		on_failure = continue
# 	}
# }
#
# resource "null_resource" "turso_token" {
# 	depends_on = [null_resource.turso_database]
#
# 	provisioner "local-exec" {
# 		when = create
# 		command = "turso db tokens create ${var.turso_config.db_name} > db-token.txt --expiration never"
# 	}
# }
#
# data "local_file" "token" {
# 	depends_on = [null_resource.turso_token]
# 	filename   = "db-token.txt"
# }
#
# output "turso_token" {
# 	value     = trimspace(data.local_file.token.content)
# 	sensitive = true
# }
