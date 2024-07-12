package content

import (
	"github.com/ainsleydev/sclark.uk/types"
	"github.com/ainsleydev/webkit/pkg/util/ptr"
)

var Portfolio = types.BlockPortfolio{
	Title:   "Portfolio",
	Content: ptr.StringPtr("I'm baby fam drinking vinegar tumeric semiotics vaporware shabby chic tonx edison bulb twee kogi. Church-key kogi DSA unicorn ugh adaptogen locavore poutine lumbersexual YOLO pickled. Forage chia thundercats chartreuse bespoke typewriter."),
	Items: []types.Portfolio{
		{
			Title:    "All You Need to Know About Getting a Pet Tortoise",
			Category: nil,
			Company: types.Clients{
				Logo:      types.Media{},
				Name:      "",
				UpdatedAt: "",
				Url:       "",
			},
			CreatedAt: "",
			Date:      "",
			Id:        0,
			Image:     types.Media{},

			UpdatedAt: "",
			Url:       "",
		},
	},
}
