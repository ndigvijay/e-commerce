# Use the official Node.js 16 image as base
FROM --platform=linux/amd64 node:16 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory to the working directory
COPY . .

# Build the frontend application
RUN npm run build

# Use a lightweight Node.js image for serving the built assets
FROM --platform=linux/amd64 node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the built frontend assets from the build stage
COPY --from=build /app/build ./build

# Expose port 3000
EXPOSE 3000

# Command to run the frontend server
CMD ["npx", "serve", "-s", "build"]
