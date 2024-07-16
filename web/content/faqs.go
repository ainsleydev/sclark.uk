package content

import (
	"log/slog"

	"github.com/goccy/go-json"

	"github.com/ainsleydev/sclark.uk/types"
)

var faqJSON []byte = []byte(`{"blockType":"faqs","faqs":[{"answer":"I'm baby farm-to-table kombucha microdosing occupy four dollar toast flexitarian hoodie. Blackbird spyplane vibecession taxidermy kogi, 3 wolf moon shabby chic salvia. Pork belly man braid fashion axe big mood gastropub drinking vinegar gentrify scenester aesthetic tumblr kale chips coloring book. Blackbird spyplane prism pinterest keytar cardigan, hashtag enamel pin craft beer. Sartorial synth cold-pressed snackwave shaman.","question":"How long is each lesson?"},{"answer":"I'm baby farm-to-table kombucha microdosing occupy four dollar toast flexitarian hoodie. Blackbird spyplane vibecession taxidermy kogi, 3 wolf moon shabby chic salvia. Pork belly man braid fashion axe big mood gastropub drinking vinegar gentrify scenester aesthetic tumblr kale chips coloring book. Blackbird spyplane prism pinterest keytar cardigan, hashtag enamel pin craft beer. Sartorial synth cold-pressed snackwave shaman.","question":"How regularly should I have lessons?"},{"answer":"I'm baby farm-to-table kombucha microdosing occupy four dollar toast flexitarian hoodie. Blackbird spyplane vibecession taxidermy kogi, 3 wolf moon shabby chic salvia. Pork belly man braid fashion axe big mood gastropub drinking vinegar gentrify scenester aesthetic tumblr kale chips coloring book. Blackbird spyplane prism pinterest keytar cardigan, hashtag enamel pin craft beer. Sartorial synth cold-pressed snackwave shaman.","question":"Which English levels do you teach?"},{"answer":"I'm baby farm-to-table kombucha microdosing occupy four dollar toast flexitarian hoodie. Blackbird spyplane vibecession taxidermy kogi, 3 wolf moon shabby chic salvia. Pork belly man braid fashion axe big mood gastropub drinking vinegar gentrify scenester aesthetic tumblr kale chips coloring book. Blackbird spyplane prism pinterest keytar cardigan, hashtag enamel pin craft beer. Sartorial synth cold-pressed snackwave shaman.","question":"How will lessons be conducted?"},{"answer":"I'm baby farm-to-table kombucha microdosing occupy four dollar toast flexitarian hoodie. Blackbird spyplane vibecession taxidermy kogi, 3 wolf moon shabby chic salvia. Pork belly man braid fashion axe big mood gastropub drinking vinegar gentrify scenester aesthetic tumblr kale chips coloring book. Blackbird spyplane prism pinterest keytar cardigan, hashtag enamel pin craft beer. Sartorial synth cold-pressed snackwave shaman.","question":"Do I need any special materials or equipment?"}]}`)

func init() {
	buf, err := json.Marshal(FAQs)
	if err != nil {
		slog.Error("Marshalling faqJSON: " + err.Error())
	}
	faqJSON = buf
}

var FAQs = types.BlockFAQs{
	BlockType: "faqs",
	Faqs: []types.BlockFAQsFaqsElem{
		{
			Question: "How long is each lesson?",
			Answer:   "I'm baby farm-to-table kombucha microdosing occupy four dollar toast flexitarian hoodie. Blackbird spyplane vibecession taxidermy kogi, 3 wolf moon shabby chic salvia. Pork belly man braid fashion axe big mood gastropub drinking vinegar gentrify scenester aesthetic tumblr kale chips coloring book. Blackbird spyplane prism pinterest keytar cardigan, hashtag enamel pin craft beer. Sartorial synth cold-pressed snackwave shaman.",
		},
		{
			Question: "How regularly should I have lessons?",
			Answer:   "I'm baby farm-to-table kombucha microdosing occupy four dollar toast flexitarian hoodie. Blackbird spyplane vibecession taxidermy kogi, 3 wolf moon shabby chic salvia. Pork belly man braid fashion axe big mood gastropub drinking vinegar gentrify scenester aesthetic tumblr kale chips coloring book. Blackbird spyplane prism pinterest keytar cardigan, hashtag enamel pin craft beer. Sartorial synth cold-pressed snackwave shaman.",
		},
		{
			Question: "Which English levels do you teach?",
			Answer:   "I'm baby farm-to-table kombucha microdosing occupy four dollar toast flexitarian hoodie. Blackbird spyplane vibecession taxidermy kogi, 3 wolf moon shabby chic salvia. Pork belly man braid fashion axe big mood gastropub drinking vinegar gentrify scenester aesthetic tumblr kale chips coloring book. Blackbird spyplane prism pinterest keytar cardigan, hashtag enamel pin craft beer. Sartorial synth cold-pressed snackwave shaman.",
		},
		{
			Question: "How will lessons be conducted?",
			Answer:   "I'm baby farm-to-table kombucha microdosing occupy four dollar toast flexitarian hoodie. Blackbird spyplane vibecession taxidermy kogi, 3 wolf moon shabby chic salvia. Pork belly man braid fashion axe big mood gastropub drinking vinegar gentrify scenester aesthetic tumblr kale chips coloring book. Blackbird spyplane prism pinterest keytar cardigan, hashtag enamel pin craft beer. Sartorial synth cold-pressed snackwave shaman.",
		},
		{
			Question: "Do I need any special materials or equipment?",
			Answer:   "I'm baby farm-to-table kombucha microdosing occupy four dollar toast flexitarian hoodie. Blackbird spyplane vibecession taxidermy kogi, 3 wolf moon shabby chic salvia. Pork belly man braid fashion axe big mood gastropub drinking vinegar gentrify scenester aesthetic tumblr kale chips coloring book. Blackbird spyplane prism pinterest keytar cardigan, hashtag enamel pin craft beer. Sartorial synth cold-pressed snackwave shaman.",
		},
	},
}
