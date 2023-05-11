
FROM node:16-alpine 

RUN npm install -g nodemon

COPY ./src /usr/src/front

WORKDIR /usr/src/front

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]