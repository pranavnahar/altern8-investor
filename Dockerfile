# Use the latest stable Node.js version with Alpine for a smaller image
FROM node:20.12-alpine3.18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install production dependencies (you can remove '--only=production' for development)
RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Install required devDependencies
RUN npm install --save-dev eslint typescript @types/node

# Copy the production environment file
COPY .env.production .env

# Remove any local environment file to avoid conflicts
RUN rm -f .env.local

# Set the environment to production explicitly
ENV NODE_ENV=production


# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3007

# Start the Next.js application and bind it to 0.0.0.0 with port 3007
CMD ["npm", "start", "--", "-p", "3007", "-H", "0.0.0.0"]
