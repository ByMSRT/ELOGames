# ELOGames

ELOGAMES is a students project created to validate their 3 year of Development Studies.

# How to launch the project.

First of all, you need to have Docker installed on your computer. If not, you can use postgresql instead.

## With Docker

1. Add on root directory, a `.env` file with password, username, and database name you want to give to your database. (*File `.env.example` is here to help you.*)
2. Add on `/back`  directory another `.env` file with the database URL based on what you chose in the first step, JWT secrets, and port (which will always be 3000). (*File `/back/.env.example` is here to help you.*)
3. On a terminal, launch the command `docker-compose up -d` which will build images and containers used for the app.
4. Go to [http://localhost:5173](http://localhost:5173) and enjoy !

## With Postgres

1. Install Postgres on your computer.
2. A database will be created, with chosen username, password and database name. Remind you of it, you will need it.
3. Add on root directory, a `.env` file with password, username, and database name you chose. (*File `.env.example` is here to help you.*)
4. Add on `/back`  directory another `.env` file with the database URL based on what you chose in the first step, JWT secrets, and port (which will always be 3000). (*File `/back/.env.example` is here to help you.*)
5. In `/back`, launch `yarn install` or `npm install`, then `yarn dev` or `npm run dev`
6. In `/front`, launch `yarn install` or `npm install`, then `yarn dev` or `npm run dev`
7. Go to [http://localhost:5173](http://localhost:5173) and enjoy !
