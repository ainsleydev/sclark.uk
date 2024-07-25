package content

import (
	"github.com/ainsleydev/webkit/pkg/adapters/payload"
	"github.com/ainsleydev/webkit/pkg/util/ptr"
)

var PayloadSettings = &payload.Settings{
	CodeInjection: nil,
	Contact: &payload.SettingsContact{
		Email:     ptr.StringPtr("hello@sclark.uk"),
		Telephone: ptr.StringPtr("+447415685531"),
	},
	Locale: "en-GB",
	Logo: &payload.Media{
		URL: "/assets/images/logo.svg",
	},
	Maintenance: nil,
	Meta: payload.SettingsMeta{
		Title:       ptr.StringPtr("S. Clark"),
		Description: ptr.StringPtr("Can’t find the right words?"),
		Private:     ptr.BoolPtr(false),
	},
	Robots:   ptr.StringPtr("User-agent: *\nDisallow: /"),
	SiteName: ptr.StringPtr("S. Clark"),
	Social: &payload.SettingsSocial{
		Instagram: ptr.StringPtr("https://www.instagram.com/s.clark_language_content"),
		LinkedIn:  ptr.StringPtr("https://www.linkedin.com/in/stephanie-clark-09076ba1"),
		Tiktok:    ptr.StringPtr("https://www.tiktok.com/@s.clark_language_content"),
		Youtube:   ptr.StringPtr("https://youtube.com/@english_language_lounge?feature=shared"),
	},
	TagLine: ptr.StringPtr("Can’t find the right words?"),
	Extra: map[string]any{
		"footer": map[string]any{
			"title":   "Can’t find the right words?",
			"content": "Combining a love for the English language and written word something else and something else.",
		},
	},
}
