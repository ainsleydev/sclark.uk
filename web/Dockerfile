# Build stage
FROM golang:1.22-alpine AS build
WORKDIR /app
COPY go.mod ./
COPY go.sum ./
RUN go mod download
COPY . ./
RUN go build -o main .

# Run stage
FROM alpine:latest
WORKDIR /app
COPY --from=build /app/main .
CMD ["/app/main"]
