# Build stage
FROM golang:1.22-alpine AS build
RUN apk add git
WORKDIR /app
COPY . ./
RUN go install github.com/a-h/templ/cmd/templ@latest
RUN go generate ./...
RUN go mod tidy
RUN go build -o entrypoint .

# Run stage
FROM alpine:latest AS runtime
COPY --from=build /app/entrypoint .
EXPOSE 3000
ENTRYPOINT ["/entrypoint"]
