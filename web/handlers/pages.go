package handlers

import (
	"github.com/ainsleyclark/go-payloadcms"

	"github.com/ainsleydev/sclark.uk/content"
	"github.com/ainsleydev/sclark.uk/views/pages"
	"github.com/ainsleydev/webkit/pkg/adapters/payload"
	"github.com/ainsleydev/webkit/pkg/webkit"
)

// PagesHandler is the handler for rendering pages.
func PagesHandler(p *payloadcms.Client) webkit.Handler {
	return func(c *webkit.Context) error {
		//ctx := c.Context()
		//path := strings.TrimPrefix(strings.TrimSuffix(c.Request.URL.Path, "/"), "/")
		//
		//if strings.Contains(c.Request.URL.Path, "favicon.ico") {
		//	return nil
		//}
		//
		//var page types.Pages
		//resp, err := p.Collections.FindBySlug(ctx, "pages", path, &page)
		//if resp.StatusCode == http.StatusNotFound {
		//	return webkit.NewError(http.StatusNotFound, "Page not found: "+path)
		//} else if err != nil {
		//	slog.Error("Failed to find page: " + err.Error())
		//	return webkit.NewError(http.StatusInternalServerError, "Failed to find page")
		//}
		//
		////c.SetContext(webkitctx.WithHeadSnippet(c.Context(), "Schema - FAQS", "<script type=\"application/ld+json\">{\"@context\":\"http://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[]}</script>"))
		//c.Set(payload.ContextKeyPageMeta, page.Meta)
		//
		//return pages.RenderBlockPage(c, page)
		return nil
	}
}

// HomeHandler is the handler for rendering the homepage.
func HomeHandler(p *payloadcms.Client) webkit.Handler {
	return func(c *webkit.Context) error {
		//ctx := c.Context()
		//
		//var page types.Pages
		//resp, err := p.Get(ctx, "/api/pages/home", &page)
		//if resp.StatusCode == http.StatusNotFound {
		//	return webkit.NewError(http.StatusNotFound, "Home not found")
		//} else if err != nil {
		//	slog.Error("Failed to find page: " + err.Error())
		//	return webkit.NewError(http.StatusInternalServerError, "Failed to find page")
		//}
		//
		//c.Set(payload.ContextKeyPageMeta, page.Meta)
		//
		//return pages.RenderBlockPage(c, page)
		return nil
	}
}

func TempHandler() webkit.Handler {
	return func(c *webkit.Context) error {
		c.Request = c.Request.WithContext(payload.WithSettings(c.Context(), content.PayloadSettings))
		return c.Render(pages.Home())
	}
}

func NotFoundHandler() webkit.Handler {
	return func(c *webkit.Context) error {
		c.Request = c.Request.WithContext(payload.WithSettings(c.Context(), content.PayloadSettings))
		return c.Render(pages.Message(pages.MessagePageProps{
			Title:   "404 Not Found",
			Content: "Whoops, we couldn't find the page you were looking for.",
		}))
	}
}

func MaintenanceHandler() payload.MaintenanceRendererFunc {
	return func(c *webkit.Context, m payload.Maintenance) error {
		if m.Title == "" {
			m.Title = "This site is currently down for maintenance."
		}
		if m.Content == "" {
			m.Content = "We'll be back soon!"
		}
		return c.Render(pages.Message(pages.MessagePageProps{
			Title:   m.Title,
			Content: m.Content,
		}))
	}
}

// ErrorHandler returns a centralized error handler for the application.
// This function is used to render error pages with the correct status code.
// TODO: Perhaps we need to add other services to capture 500s like Sentry etc.
//func ErrorHandler() webkit.Handler {
//	return func(c *webkit.Context) error {
//		slog.Error("Error: " + .Error())
//		return nil
//	}
//}
