package handlers

import (
	"bytes"
	"encoding/json"
	"errors"
	"log/slog"
	"net/http"

	"github.com/go-ozzo/ozzo-validation"
	"github.com/go-ozzo/ozzo-validation/is"

	"github.com/ainsleyclark/go-payloadcms"
	"github.com/ainsleydev/sclark.uk/views/components"
	"github.com/ainsleydev/webkit/pkg/adapters/payload"
	"github.com/ainsleydev/webkit/pkg/util/httputil"

	"github.com/ainsleydev/webkit/pkg/webkit"
)

// ContactForm represents the form data for a contact form
// from the frontend.
type ContactForm struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

// Web3FormsRequest represents the request to the Web3Forms API.
// See: https://docs.web3forms.com/how-to-guides/html-and-javascript
type Web3FormsRequest struct {
	ContactForm
	APIKey  string `json:"access_key"`
	Subject string `json:"subject"`
}

// Validate validates the contact form.
func (c ContactForm) Validate() error {
	return validation.ValidateStruct(&c,
		validation.Field(&c.Name, validation.Required),
		validation.Field(&c.Email, validation.Required, is.Email),
		validation.Field(&c.Message, validation.Required),
	)
}

// Contact is the handler for when a form has been submitted.
func Contact(_ *payloadcms.Client, web3FormsKey string) webkit.Handler {
	return func(c *webkit.Context) error {
		slog.Info("Received contact form request")

		if err := c.Request.ParseForm(); err != nil {
			return err
		}

		form := ContactForm{
			Name:    c.Request.FormValue("name"),
			Email:   c.Request.FormValue("email"),
			Message: c.Request.FormValue("message"),
		}

		var formHTML payload.Form
		err := json.Unmarshal([]byte(c.Request.FormValue("payload-form")), &formHTML)
		if err != nil {
			slog.Error("Obtaining Payload Form")
			return err
		}

		for idx, field := range formHTML.Fields {
			if field.Name == "name" {
				formHTML.Fields[idx].Value = form.Name
			}
			if field.Name == "email" {
				formHTML.Fields[idx].Value = form.Email
			}
			if field.Name == "message" {
				formHTML.Fields[idx].Value = form.Message
			}
		}

		if err := form.Validate(); err != nil {
			var e validation.Errors
			if !errors.As(err, &e) {
				slog.Error("Failed to validate contact form: " + err.Error())
			}
			return c.Render(components.Form(components.FormProps{
				Form:   formHTML,
				Errors: e,
			}))
		}

		web3Form := Web3FormsRequest{
			ContactForm: form,
			APIKey:      web3FormsKey,
			Subject:     "S.Clark - New contact form submission from: " + form.Name,
		}

		f := components.Form(components.FormProps{
			Form:    formHTML,
			Errors:  nil,
			Success: false,
		})

		buf, err := json.Marshal(web3Form)
		if err != nil {
			slog.Error("Failed to marshal Web3Forms request: " + err.Error())
			return c.Render(f)
		}

		slog.Info("Preparing to submit form request to Web 3 Forms")

		post, err := http.Post("https://api.web3forms.com/submit", "application/json", bytes.NewBuffer(buf))
		if err != nil {
			slog.Error("Failed to post contact form: " + err.Error())
			return c.Render(f)
		}

		if !httputil.Is2xx(post.StatusCode) {
			slog.Error("Contact form came back with a bad status", "stats", post.StatusCode)
			return c.Render(f)
		}

		slog.Info("Contact form email sent successfully")

		return c.Render(components.Form(components.FormProps{
			Form:    formHTML,
			Success: true,
		}))
	}
}
