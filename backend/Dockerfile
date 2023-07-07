FROM node:18 AS builder

WORKDIR /app/backend/

COPY package.json ./

RUN npm install -f

COPY . .

EXPOSE 5000
CMD [ "npm", "start" ]