# Use an official Golang runtime as a parent image
FROM golang:1.22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the local package files to the container's workspace
COPY . .

# Build the Go application
RUN go build -o app

# Expose the port on which the application will run
EXPOSE 3000

# Define the command to run the executable
CMD ["./app"]
