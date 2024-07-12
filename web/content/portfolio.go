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
			Date:     "13/10/2022",
			Url:      "https://decspets.ie/insights/all-you-need-to-know-about-getting-a-pet-tortoise/",
			Category: &types.PortfolioCategories{Title: "E-Commerce"},
			Company: types.Clients{
				Name: "Dec's Pets",
				Url:  "https://decspets.ie",
				Logo: types.Media{
					Url: ptr.StringPtr("https://decspets.ie/wp-content/uploads/2021/03/Decs-Pets-Logo-1.png"),
				},
			},
			Image: types.Media{
				Url: ptr.StringPtr("https://cdn-cgpdj.nitrocdn.com/osReepnOIsLpTltbafzloukxpexawMzs/assets/images/optimized/rev-f49c1a0/decspets.ie/wp-content/uploads/2022/09/melissa-keizer-X-0FisCRIaA-unsplash-scaled.jpg"),
			},
		},
	},
}
