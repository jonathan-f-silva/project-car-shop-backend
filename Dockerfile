FROM node:16-alpine

EXPOSE 3001

WORKDIR /app

COPY . .

RUN npm install && npm run build

USER node

CMD [ "npm", "start" ]
