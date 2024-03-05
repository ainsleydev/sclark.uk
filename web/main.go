package main

import (
	"github.com/labstack/echo/v4"

	"github.com/ainsleydev/sclark.uk/views"
)

//go:generate templ generate

func main() {
	component := views.Hello("Stephanie")

	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return component.Render(c.Request().Context(), c.Response().Writer)
	})

	e.Logger.Fatal(e.Start(":3000"))
}
