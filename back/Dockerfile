
FROM node:18

RUN npm install -g nodemon

COPY ./src /usr/src/back

WORKDIR /usr/src/back

COPY package*.json ./
COPY prisma ./prisma/


RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

