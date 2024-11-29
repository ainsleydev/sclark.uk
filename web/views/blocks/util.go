package blocks

import "github.com/ainsleydev/webkit/pkg/util/random"

// GetID retrieves an ID from the block
// Returns a random number if it's empty.
func GetID(id *string) string {
	if id == nil {
		return random.Seq(16)
	}
	return *id
}
