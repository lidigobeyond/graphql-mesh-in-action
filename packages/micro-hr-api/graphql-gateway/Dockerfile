FROM node:18

WORKDIR /app

COPY package.json package-lock.json lerna.json ./

COPY packages/micro-hr-api/graphql-gateway ./packages/micro-hr-api/graphql-gateway

RUN npm ci

CMD npx lerna exec --scope=graphql-gateway "npm run start:dev"