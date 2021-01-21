FROM node:14.14.0-alpine

WORKDIR /project-tracker-app
COPY package*.json ./
RUN npm i
COPY ./ ./
RUN npm run build

EXPOSE 5000
CMD [ "npm", "start" ]