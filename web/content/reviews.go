package content

import (
	"github.com/ainsleydev/sclark.uk/types"
	"github.com/ainsleydev/webkit/pkg/util/ptr"
)

var Reviews = types.BlockReviews{
	Title:   "Testimonials",
	Content: ptr.StringPtr("Don’t just take my word for it – here’s what some of my clients have to say.Don’t just take my word for it – here’s what some of my clients have to say. Don’t just take my word for it – here’s what some of my clients have to say."),
	Items: []types.Reviews{
		{
			Content: "She tailors our weekly sessions to address my speaking challenges, including habitual errors and pronunciation, and uses her extensive teaching experience to understand common learner issues.",
			Author: types.ReviewsAuthor{
				FirstName:   "Chris",
				LastName:    "Talent",
				Description: "An English learner from Japan.",
			},
		},
		{
			Content: "As an English teacher at Islington Centre for English, Stephanie was a huge asset; organised, professional, very popular with students and staff and a joy to work with.",
			Author: types.ReviewsAuthor{
				FirstName:   "Tim",
				LastName:    "Cook",
				Description: "Owner of Islington Centre for English",
			},
		},
		{
			Content: "As an English language teacher, Stephanie reported directly to me and in all our years of working together I never had a single complaint from a student she taught.",
			Author: types.ReviewsAuthor{
				FirstName:   "Bernice",
				LastName:    "Whatever",
				Description: "Owner of Islington Centre for English",
			},
		},
	},
}
