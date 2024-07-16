package content

import (
	"fmt"
	"strings"

	"github.com/goccy/go-json"

	"github.com/ainsleydev/sclark.uk/types"
	"github.com/ainsleydev/webkit/pkg/adapters/payload"
	"github.com/ainsleydev/webkit/pkg/util/ptr"
)

var englishLessonHTML = "<h3>Learning a foreign language isn't easy</h3><p>Especially when it comes to speaking. It takes time, practice and confidence.  But you are not alone. A s an English language teacher with 20 years’ experience, I’ve helped adults from all over the world to feel more confident in their English skills – and I can help you too!</p><p>How? With professional teaching techniques, a deep knowledge of the English language, a lot of patience, and a friendly, positive attitude. I’ll help you feel so comfortable speaking English, that you’ll forget you were ever worried.</p><h3>But you can do it, in 3 easy steps</h3><ol class=\"list-number\"><li value=1>Discuss what you need in our free 20-minute call</li><li value=2>Do something else that’s fucking fantastic</li><li value=3>Book your first set of lessons</li></ol>"

var EnglishLessons = types.BlockContentWithImage{
	Image: types.Media{
		Url: ptr.StringPtr("/assets/images/mockups/laptop.png"),
	},
	Sticky:        ptr.BoolPtr(true),
	ImagePosition: types.BlockContentWithImageImagePositionLeft,
	TextLayout: payload.Blocks{
		{
			BlockType: "content-block",
			RawJSON:   json.RawMessage(fmt.Sprintf(`{"contentHtml":"%s"}`, strings.ReplaceAll(englishLessonHTML, `"`, `\"`))),
		},
		{
			BlockType: "faqs",
			RawJSON:   json.RawMessage(faqJSON),
		},
	},
}
