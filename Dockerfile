FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN cd ./Adjuntos/swagger && npm install

EXPOSE 4000

COPY ./Adjuntos/swagger/package*.json ./

CMD ["npm", "start"]



