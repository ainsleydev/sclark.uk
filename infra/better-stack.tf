# Better Stack

resource "logtail_source" "web_logs" {
	name     = "Web"
	platform = "rsyslog"
	live_tail_pattern = "{message_json.level}: {message_json.msg}"
}

resource "logtail_source" "cms_logs" {
	name     = "CMS"
	platform = "rsyslog"
}

output "log_destination_web" {
	value = logtail_source.web_logs.token
}

output "log_destination_cms" {
	value = logtail_source.cms_logs.token
}
