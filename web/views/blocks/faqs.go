package blocks

import (
	"github.com/ainsleydev/sclark.uk/types"
	"github.com/ainsleydev/sclark.uk/views/components"
)

// FAQsToCollapse converts the FAQs block to a Collapse component.
func FAQsToCollapse(props types.BlockFAQs) components.CollapseProps {
	items := make([]components.CollapseItem, len(props.Faqs))
	for i, item := range props.Faqs {
		items[i] = components.CollapseItem{
			Title:   item.Question,
			Content: item.Answer,
		}
	}
	return components.CollapseProps{
		Items:  items,
		IsFAQs: true,
	}
}
