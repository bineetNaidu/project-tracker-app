FROM node:14.14.0-alpine

WORKDIR /project-tracker-app
COPY package*.json ./
RUN npm i
RUN npm run build
COPY ./ ./

EXPOSE 5000
CMD [ "npm", "start" ]