# Stage 1: Builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .

# Stage 2: Runtime (Distroless)
FROM gcr.io/distroless/nodejs18-debian11
WORKDIR /app
COPY --from=builder /app .

CMD ["src/index.js"]
