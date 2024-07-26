variable digital_ocean_config {
	type = object({
		api_key = string
		spaces_access_key = string
		spaces_secret_key = string
	})
	description = "Configuration for the Digital Ocean provider"
}

variable better_stack_config {
	type = object({
		api_key = string
	})
	description = "Configuration for the Better Stack provider"
}
