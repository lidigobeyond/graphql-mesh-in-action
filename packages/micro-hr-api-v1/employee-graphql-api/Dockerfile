FROM node:18

WORKDIR /app

COPY package.json package-lock.json lerna.json ./

COPY packages/micro-hr-api-v1/employee-graphql-api ./packages/micro-hr-api-v1/employee-graphql-api

RUN npm ci

RUN npx prisma generate --schema ./packages/micro-hr-api-v1/employee-graphql-api/prisma/schema.prisma

CMD npx lerna exec --scope=employee-graphql-api "npm run start:dev"