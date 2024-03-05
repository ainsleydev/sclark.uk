# Build stage
FROM golang:1.22-alpine AS build
RUN apk add git
WORKDIR /app
COPY . ./
RUN go mod tidy
RUN go generate ./...
RUN go build -o main .

# Run stage
FROM alpine:latest AS runtime
COPY --from=build /app/main .
EXPOSE 3000
ENTRYPOINT ["/main"]
