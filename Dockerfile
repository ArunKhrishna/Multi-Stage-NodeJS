# Stage 1: Builder
FROM node:18-alpine AS builder
WORKDIR /app

# Copy only what's needed for install
COPY package*.json ./
RUN npm ci --omit=dev

# Copy source code
COPY src/ ./src

# Stage 2: Runtime (Lightweight Distroless)
FROM gcr.io/distroless/nodejs18

WORKDIR /app

# Copy only runtime files
COPY --from=builder /app/src ./src
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

CMD ["src/index.js"]
