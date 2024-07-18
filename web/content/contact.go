package content

import (
	"github.com/ainsleydev/sclark.uk/types"
	"github.com/ainsleydev/webkit/pkg/adapters/payload"
	"github.com/ainsleydev/webkit/pkg/util/ptr"
)

var ContactForm = types.BlockContact{
	BlockType:     "contact-block",
	Title:         "Contact now",
	Content:       ptr.StringPtr("Don’t just take my word for it – here’s what some of my clients have to say. Don’t just take my word for it – here’s what some of my clients have to say. Don’t just take my word for it – here’s what some of my clients have to say."),
	IncludeSocial: ptr.BoolPtr(true),
	Form: &payload.Form{
		ID:    1,
		Title: "Contact",
		Fields: []payload.FormField{
			{
				ID:        "66978fa9cfde9d48af3ee2ea",
				BlockType: payload.FormBlockTypeText,
				Name:      "name",
				Label:     ptr.StringPtr("Name"),
				Required:  ptr.BoolPtr(true),
			},
			{
				ID:        "66978fa9cfde9d48af3ee2eb",
				BlockType: payload.FormBlockTypeText,
				Name:      "email",
				Label:     ptr.StringPtr("Email"),
				Required:  ptr.BoolPtr(true),
			},
			{
				ID:        "66978fa9cfde9d48af3ee2ec",
				BlockType: payload.FormBlockTypeTextarea,
				Name:      "message",
				Label:     ptr.StringPtr("Message"),
			},
		},
		SubmitButtonLabel: ptr.StringPtr("Get In Touch"),
		Redirect:          &payload.FormRedirect{URL: ""},
		UpdatedAt:         "2024-07-17T09:32:25.293Z",
		CreatedAt:         "2024-07-17T09:32:25.293Z",
	},
}
