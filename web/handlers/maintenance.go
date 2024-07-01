package handlers

import (
	"github.com/ainsleydev/webkit/pkg/adapters/payload"
	"github.com/ainsleydev/webkit/pkg/webkit"

	"github.com/ainsleydev/sclark.uk/views/pages"
)

func MaintenanceHandler() payload.MaintenanceRendererFunc {
	return func(c *webkit.Context, m payload.Maintenance) error {
		if m.Title == "" {
			m.Title = "This site is currently down for maintenance."
		}
		if m.Content == "" {
			m.Content = "We'll be back soon!"
		}
		return c.Render(pages.Maintenance(pages.MaintenanceProps{
			Title:   m.Title,
			Content: m.Content,
		}))
	}
}
