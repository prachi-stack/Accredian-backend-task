 FROM node:18-alpine  # Use a lightweight Node.js 18 image

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 5000 to allow connections
EXPOSE 5000

# Define the command to run the backend application
CMD ["npm", "start"]
