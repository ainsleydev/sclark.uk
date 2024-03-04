setup: # Setup dependencies
	npm install
	husky install
	npm i -g vercel
	npm -g install svgo
	brew install ffmpeg
	go mod tidy
	go install github.com/deepmap/oapi-codegen/cmd/oapi-codegen@latest
	go generate ./...

deploy:
	echo 'TODO';
.PHONY: deploy

lint:
	golangci-lint run --fix ./...
.PHONY: lint

format:
	go fmt ./...
.PHONY: format

excluded := grep -v /gen/ | grep -v /mocks/ | github.com/ainsleyclark/sclark.uk

test:
	cd ./api/_pkg && go test ./... -race $$(go list ./... | $(excluded)) -coverprofile=../../coverage.out -covermode=atomic && cd ../../
.PHONY: test

mock:
	rm -rf gen/mocks \
	&& mockery --dir=api/_pkg --all --exported=true --output=./api/_mocks
.PHONY: mock

all:
	$(MAKE) format
	$(MAKE) lint
	$(MAKE) test
.PHONY: all

cover: test
	go tool cover -html=coverage.out
.PHONY: cover

todo:
	$(Q) grep \
		--exclude=Makefile.util \
		--exclude-dir=vendor \
		--exclude-dir=.vercel \
		--exclude-dir=.gen \
		--exclude-dir=.idea \
		--exclude-dir=public \
		--exclude-dir=node_modules \
		--exclude-dir=archetypes \
		--exclude-dir=.git \
		--text \
		--color \
		-nRo \
		-E '\S*[^\.]TODO.*' \
		.
.PHONY: todo

help:
	$(Q) awk 'BEGIN {FS = ":.*#"; printf "Usage: make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?#/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
.PHONY: help
