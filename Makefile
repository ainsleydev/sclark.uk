setup:
	npm install
	husky install
	go mod tidy
	brew tap hashicorp/tap
	brew install hashicorp/tap/terraform
	go install github.com/a-h/templ/cmd/templ@latest
	go install github.com/cosmtrek/air@latest
	go generate ./...

run:
	air -c ./.air.toml & \
	npx browser-sync start \
		--files 'public/**/*.html, public/**/*.css' \
		--port 3001 \
		--proxy 'localhost:3000' \
		--middleware 'function(req, res, next) { \
			res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); \
			return next(); \
		}'
.PHONY: run

kill:
	@PIDS=$$(lsof -t -i:3000); \
	if [ -n "$$PIDS" ]; then \
		kill -9 $$PIDS; \
	fi
.PHONY: kill

deploy:
	echo 'TODO';
.PHONY: deploy

lint:
	golangci-lint run --fix ./...
.PHONY: lint

format:
	go fmt ./...
	templ fmt
.PHONY: format

excluded := grep -v /gen/ | grep -v /mocks/ | github.com/ainsleyclark/sclark.uk

test:
	go test ./... -race $$(go list ./... | $(excluded)) -coverprofile=../../coverage.out -covermode=atomic
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
