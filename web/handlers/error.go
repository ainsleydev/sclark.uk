package handlers

import (
	"errors"
	"log/slog"
	"net/http"

	"github.com/ainsleydev/webkit/pkg/webkit"

	"github.com/ainsleydev/sclark.uk/views/pages"
)

// ErrorHandler returns a centralized error handler for the application.
// This function is used to render error pages with the correct status code.
// TODO: Perhaps we need to add other services to capture 500s like Sentry etc.
func ErrorHandler() webkit.ErrorHandler {
	return func(c *webkit.Context, err error) error {
		props := pages.ErrorProps{
			Code:    http.StatusInternalServerError,
			Message: err.Error(),
		}

		var e *webkit.Error
		ok := errors.As(err, &e)
		if ok {
			props = pages.ErrorProps{
				Code:    e.Code,
				Message: e.Message,
			}
		}

		slog.Error("Error rendering page: " + err.Error())

		return c.RenderWithStatus(props.Code, pages.Error(props))
	}
}
