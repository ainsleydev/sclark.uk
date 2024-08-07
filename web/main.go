package main

import (
	"log/slog"
	"os"
	"time"

	"github.com/ainsleydev/sclark.uk/handlers"
	"github.com/ainsleydev/webkit/pkg/adapters/payload"
	"github.com/ainsleydev/webkit/pkg/cache"
	"github.com/ainsleydev/webkit/pkg/env"
	"github.com/ainsleydev/webkit/pkg/log"
	"github.com/ainsleydev/webkit/pkg/middleware"
	"github.com/ainsleydev/webkit/pkg/webkit"
)

//go:generate templ generate

type Env struct {
	AppEnv          string `env:"APP_ENV" envDefault:"development"`
	AppPort         string `env:"APP_PORT" envDefault:"3000"`
	AppURL          string `env:"APP_URL"`
	PayloadURL      string `env:"PAYLOAD_URL" envRequired:"true"`
	PayloadAPIKey   string `env:"PAYLOAD_API_KEY" envRequired:"true"`
	Web3FormsAPIKey string `env:"WEB3_FORMS_API_KEY" envRequired:"true"`
}

func main() {
	kit := webkit.New()

	config := &Env{}
	err := env.ParseConfig(config)
	if err != nil {
		slog.Error("Failed to parse config: " + err.Error())
		os.Exit(1)
	}

	log.Bootstrap("S.Clark")

	cacheDriver := cache.NewInMemory(24 * time.Hour * 7 * 4)

	kit.Plug(middleware.Recover)
	kit.Plug(middleware.RequestID)
	kit.Plug(middleware.TrailingSlashRedirect)
	kit.Plug(middleware.NonWWWRedirect)
	kit.Plug(middleware.Gzip)
	kit.Plug(middleware.Logger)

	p, err := payload.New(
		payload.WithBaseURL(config.PayloadURL),
		payload.WithAPIKey(config.PayloadAPIKey),
		payload.WithCache(cacheDriver),
		payload.WithWebkit(kit),
		payload.WithMaintenanceHandler(handlers.MaintenanceHandler()),
		payload.WithNavigation(),
	)
	if err != nil {
		slog.Error("Failed to create payload client: " + err.Error())
		os.Exit(1)
	}

	kit.Plug(middleware.CORS)
	kit.Plug(middleware.URL)
	kit.Plug(middleware.Minify)

	kit.Get("/ping/", webkit.PingHandler)
	kit.Get("/", handlers.HomeHandler(p.Client))
	kit.NotFound(handlers.NotFoundHandler())
	kit.Post("/contact/", handlers.Contact(p.Client, config.Web3FormsAPIKey))
	kit.Static("/assets/", "./dist")

	if err = kit.Start(":" + config.AppPort); err != nil {
		slog.Error("Failed to start server: " + err.Error())
	}
}
