package content

import (
	"github.com/ainsleydev/sclark.uk/types"
	"github.com/ainsleydev/webkit/pkg/adapters/payload"
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
			Category: types.PortfolioCategories{Title: "E-Commerce"},
			Company: types.Clients{
				Name: "Dec's Pets",
				Url:  "https://decspets.ie",
				Logo: payload.Media{
					URL: "/assets/exports/logos/coloured/decs-pets.svg",
				},
			},
			Image: payload.Media{
				URL: "/assets/exports/portfolio/pet-tortoise.jpg",
			},
		},
		{
			Title:    "Marketing Monday: 3 Email Marketing Best Practices for Education Providers",
			Date:     "10/07/2023",
			Url:      "https://schoolsandagents.com/newsarticle/marketing_monday_1007",
			Category: types.PortfolioCategories{Title: "International Education"},
			Company: types.Clients{
				Name: "Schools and Agents",
				Url:  "https://schoolsandagents.com/",
				Logo: payload.Media{
					URL: "/assets/exports/logos/coloured/schools-and-agents.svg",
				},
			},
			Image: payload.Media{
				URL: "/assets/exports/portfolio/email-marketing.jpg",
			},
		},
		{
			Title:    "Prebuilt Themes vs. Custom Websites: Which Is Right for You?",
			Date:     "06/06/2023",
			Url:      "https://ainsley.dev/insights/prebuilt-vs-custom/",
			Category: types.PortfolioCategories{Title: "Technology"},
			Company: types.Clients{
				Name: "ainsley.dev",
				Url:  "https://ainsley.dev",
				Logo: payload.Media{
					URL: "/assets/exports/logos/coloured/ainsley-dev.svg",
				},
			},
			Image: payload.Media{
				URL: "/assets/exports/portfolio/prebuilt-themes.jpg",
			},
		},
		{
			Title:    "5 Ways to Get Your Social Media Promotion Strategy Right",
			Date:     "04/03/2023",
			Url:      "https://www.bailogik.com/l/5-ways-to-get-your-social-media-promotion-strategy-right/",
			Category: types.PortfolioCategories{Title: "Digital Marketing"},
			Company: types.Clients{
				Name: "Bailogik",
				Url:  "https://www.bailogik.com/",
				Logo: payload.Media{
					URL: "/assets/exports/logos/coloured/bailogik.svg",
				},
			},
			Image: payload.Media{
				URL: "/assets/exports/portfolio/social-media-strategy.jpg",
			},
		},
		{
			Title:    "3 Great Tips for Online Learning: Corona Survival Guide",
			Date:     "01/08/2023",
			Url:      "https://britcent.uk/en/landing/blog/contents/study-tips/41.do",
			Category: types.PortfolioCategories{Title: "Language Learning"},
			Company: types.Clients{
				Name: "Britcent",
				Url:  "https://britcent.uk/",
				Logo: payload.Media{
					URL: "/assets/exports/logos/coloured/britcent.svg",
				},
			},
			Image: payload.Media{
				URL: "/assets/exports/portfolio/corona-survival-guide.jpg",
			},
		},
		{
			Title:    "How to Enhance Your Website Navigation Menu for SEO and Usability",
			Date:     "01/10/2023",
			Url:      "https://ainsley.dev/insights/enhance-website-navigation-menus-for-seo/",
			Category: types.PortfolioCategories{Title: "Technology"},
			Company: types.Clients{
				Name: "ainsley.dev",
				Url:  "https://ainsley.dev",
				Logo: payload.Media{
					URL: "/assets/exports/logos/coloured/ainsley-dev.svg",
				},
			},
			Image: payload.Media{
				URL: "/assets/exports/portfolio/enhance-nav-menus.jpg",
			},
		},
	},
}
