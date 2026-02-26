# garvis-command-center/Dockerfile for Frontend

# --- Builder Stage ---
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and yarn.lock (or npm install equivalent)
COPY frontend/package.json frontend/yarn.lock* ./
RUN yarn install --frozen-lockfile # Or npm ci if using npm

# Copy the rest of the frontend application code
COPY frontend/ ./

# Build the Next.js application
RUN yarn build

# --- Production Stage ---
# Use a lightweight Node.js image for the final runtime
FROM node:18-alpine AS runner

WORKDIR /app

# Set environment variables for production
ENV NODE_ENV production
# Ensure next.js can find its node_modules
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Expose the port Next.js runs on
EXPOSE 3000

# Command to run the production server
CMD ["npm", "start"]
