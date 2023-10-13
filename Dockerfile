FROM node:18-alpine AS base

COPY . .

RUN mkdir -p /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY /nextjs-blog/ /app/

WORKDIR /app

USER nextjs
EXPOSE 3000

CMD ["npm", "start"]