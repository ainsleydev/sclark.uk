# Go
FROM golang:1.22-alpine3.19 AS builder

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go generate ./...
RUN CGO_ENABLED=0 GOOS=linux go build -o app .

# Node
FROM node:18-alpine AS assets

WORKDIR /app
RUN npm install -g pnpm
COPY package*.json .
RUN pnpm install
COPY . .
RUN pnpm build:assets

# Runtime
FROM alpine:latest AS runtime

WORKDIR /root/
COPY --from=builder /app/app .
COPY --from=assets /app/dist ./dist

EXPOSE 3000
CMD ["./app"]
