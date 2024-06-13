FROM node:18

WORKDIR /app

COPY package.json package-lock.json lerna.json ./

COPY packages/micro-hr-api-v1/department-graphql-api ./packages/micro-hr-api-v1/department-graphql-api

RUN npm ci

RUN npx prisma generate --schema ./packages/micro-hr-api-v1/department-graphql-api/prisma/schema.prisma

CMD npx lerna exec --scope=department-graphql-api "npm run start:dev"