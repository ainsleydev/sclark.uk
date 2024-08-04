terraform {
	required_providers {
		digitalocean = {
			source  = "digitalocean/digitalocean"
			version = "~> 2.0"
		}
		logtail = {
			source  = "BetterStackHQ/logtail"
			version = ">= 0.1.0"
		}
	}
}

provider "digitalocean" {
	token             = var.digital_ocean_config.api_key
	spaces_access_id  = var.digital_ocean_config.spaces_access_key
	spaces_secret_key = var.digital_ocean_config.spaces_secret_key
}

provider "logtail" {
	api_token = var.better_stack_config.api_key
}

