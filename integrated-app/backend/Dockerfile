# Node 22 LTS (the course PDF shows node:18, which is end-of-life; Mongoose 8 runs fine on 22)
FROM node:22-alpine

WORKDIR /app

# Copy only the manifests first so the dependency layer remains cacheable.
COPY package*.json ./
RUN npm install --omit=dev

# Then the source code (node_modules and .env are excluded by .dockerignore)
COPY . .

ENV NODE_ENV=production
EXPOSE 5000

CMD ["node", "server.js"]
