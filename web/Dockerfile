# Build stage
FROM golang:1.22-alpine AS build
WORKDIR /app
COPY . .
RUN go mod download
RUN go build -o main .

# Run stage
FROM alpine:latest
WORKDIR /app
COPY --from=build /app/main .
CMD ["/app/main"]
