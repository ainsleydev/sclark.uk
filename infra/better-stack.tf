# Better Stack

resource "logtail_source" "s-clark-logs" {
	name     = "Web"
	platform = "rsyslog"
	live_tail_pattern = "{message_json.level}: {message_json.msg}"
}

output "log_destination" {
	value = logtail_source.s-clark-logs.token
}
