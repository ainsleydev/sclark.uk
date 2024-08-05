variable "project_name" {
	type        = string
	description = "Name of the client that will be prefixed on all resources"
}

variable "project_nice_name" {
	type        = string
	description = "Nice name of the client that will appear in project settings"
}

variable digital_ocean_config {
	type = object({
		api_key           = string
		spaces_access_key = string
		spaces_secret_key = string
	})
	description = "Configuration for the Digital Ocean provider"
}

variable "repo_name" {
	type        = string
	description = "The name of the author and name of the repository"
}

variable "payload_secret" {
	type = string
	description = "Payload secret encryption string provided"
}

variable "turso_config" {
	type = object({
		db_name = string
# 		url     = string
# 		token   = string
		api_key = string
	})
	description = "Configuration for the database"
}

variable better_stack_config {
	type = object({
		api_key = string
	})
	description = "Configuration for the Better Stack provider"
}

variable "web3_forms_api_key" {
	type        = string
	description = "The API key for Web3 Forms to send form data to from the frontend"
}
