# Use the official Node.js 14 image as base
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 5000 for the Node.js server
EXPOSE 5000

CMD [ "node", "server.js" ]

