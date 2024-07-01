FROM golang:1.22-alpine3.19 AS builder

WORKDIR /app

COPY go.* .
COPY package*.json .

RUN go mod download
RUN npm install

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -o app .
RUN npm run build

FROM alpine:latest AS runtime

WORKDIR /root/

COPY --from=builder /app/app .

EXPOSE 3000

CMD ["./app"]
