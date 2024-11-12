#TODO Configure o Dockerfile
FROM node:20.16.0 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npm install --production

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "run", "start"]