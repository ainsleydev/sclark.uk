package handlers

import (
	"fmt"

	"github.com/ainsleyclark/go-payloadcms"

	"github.com/ainsleydev/webkit/pkg/webkit"
)

// Contact is the handler for when a form has been submitted.
func Contact(p *payloadcms.Client) webkit.Handler {
	fmt.Println("Contact handler")
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
