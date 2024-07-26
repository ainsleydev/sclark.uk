# Better Stack

resource "logtail_source" "s-clark-logs" {
	name     = "Web"
	platform = "syslog"
}

output "log_destination" {
	value = logtail_source.s-clark-logs
}
