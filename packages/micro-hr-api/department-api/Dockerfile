FROM node:18

WORKDIR /app

COPY package.json package-lock.json lerna.json ./

COPY packages/micro-hr-api/department-api ./packages/micro-hr-api/department-api

RUN npm ci

RUN npx prisma generate --schema ./packages/micro-hr-api/department-api/prisma/schema.prisma

CMD npx lerna exec --scope=department-api "npm run start:dev"