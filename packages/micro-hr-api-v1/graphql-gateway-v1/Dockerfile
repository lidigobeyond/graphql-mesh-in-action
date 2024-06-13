FROM node:18

WORKDIR /app

COPY package.json package-lock.json lerna.json ./

COPY packages/micro-hr-api-v1/graphql-gateway-v1 ./packages/micro-hr-api-v1/graphql-gateway-v1

RUN npm ci

CMD npx lerna exec --scope=graphql-gateway-v1 "npm run start:dev"