FROM node:18

WORKDIR /app

COPY package.json package-lock.json lerna.json ./

COPY packages/micro-hr-api/employee-api ./packages/micro-hr-api/employee-api

RUN npm ci

RUN npx prisma generate --schema ./packages/micro-hr-api/employee-api/prisma/schema.prisma

CMD npx lerna exec --scope=employee-api "npm run start:dev"