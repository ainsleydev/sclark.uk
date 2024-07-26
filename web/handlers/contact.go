package handlers

import (
	"fmt"

	"github.com/ainsleyclark/go-payloadcms"

	"github.com/ainsleydev/webkit/pkg/webkit"
)

// Contact is the handler for when a form has been submitted.
func Contact(p *payloadcms.Client) webkit.Handler {
	return func(c *webkit.Context) error {

		c.Request.ParseForm()

		fmt.Println("Contact handler")
		return c.String(200, "<h4>Thank you for your message, we'll be in touch soon</h4>")
	}
}
