# Stage 1: Build the Angular application
FROM node:18 AS builder
WORKDIR /app/frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build

# Stage 2: Serve the built Angular application
FROM nginx:1.21.0-alpine

# Copy the built app from the previous stage
COPY --from=builder /app/frontend/dist/ProjectGym /usr/share/nginx/html/

# Copy a custom nginx configuration file if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (the default port for Nginx)
EXPOSE 80

# Start Nginx when the container is run
CMD ["nginx", "-g", "daemon off;"]