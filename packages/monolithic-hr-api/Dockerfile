FROM node:18

WORKDIR /app

COPY package.json package-lock.json lerna.json ./

COPY packages/monolithic-hr-api ./packages/monolithic-hr-api

RUN npm ci

RUN npx prisma generate --schema packages/monolithic-hr-api/prisma/schema.prisma

CMD npx lerna exec --scope=monolithic-hr-api "npm run start:dev"