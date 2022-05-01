FROM node:16-alpine

EXPOSE 8080

WORKDIR /app

COPY . .

RUN npm install && npm run build

USER node

CMD [ "npm", "start" ]
