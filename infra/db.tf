# Database

resource "turso_database" "db" {
	organization_name = "an-organization"
	group             = "a-group"
	name              = "a-database"
}

resource "turso_database_token" "db_token" {
	database_name = "a-database"
}
