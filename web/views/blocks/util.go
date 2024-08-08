package blocks

import "github.com/ainsleydev/webkit/pkg/util/random"

func getID(id *string) string {
	if id == nil {
		return random.Alpha(16)
	}
	return *id
}
