#development stage

FROM node:24-alpine as dev

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY inventory-backend/package*.json ./
RUN npm install 

# Copy the rest of the application code
COPY inventory-backend/ .

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["npx", "nodemon", "server.js"]



# Production stage

FROM node:24-alpine as prod

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY inventory-backend/package*.json ./
RUN npm install --only=production

# Copy the rest of the application code
COPY inventory-backend/ .

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]