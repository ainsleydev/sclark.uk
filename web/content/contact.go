package content

import (
	"github.com/ainsleydev/sclark.uk/types"
	"github.com/ainsleydev/webkit/pkg/util/ptr"
)

var ContactForm = types.BlockContact{
	BlockType:     "contact-block",
	Title:         "Contact now",
	Content:       ptr.StringPtr("Don’t just take my word for it – here’s what some of my clients have to say. Don’t just take my word for it – here’s what some of my clients have to say. Don’t just take my word for it – here’s what some of my clients have to say."),
	IncludeSocial: ptr.BoolPtr(true),
	Form: &types.Forms{
		ConfirmationMessage: nil,
		CreatedAt:           "",
		Emails:              nil,
		Fields:              nil,
		Id:                  0,
		Redirect:            nil,
		SubmitButtonLabel:   nil,
		Title:               "Contact ",
		UpdatedAt:           "",
	},
}
