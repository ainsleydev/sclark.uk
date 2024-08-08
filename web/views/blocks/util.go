package blocks

import "github.com/ainsleydev/webkit/pkg/util/random"

func getID(id *string) string {
	if id == nil {
		return random.Seq(16)
	}
	return *id
}
