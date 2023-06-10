import express from "express";
import { PrismaClient } from "@prisma/client";
import { json } from "body-parser";

export const cartRouter = express.Router();

const prisma = new PrismaClient();

/* const getCookies = cartRouter.get("/cookies", async (req, res) => {
    const cookies = req.cookies.cart;

    console.log(cookies);
    return json(cookies);
}); */

cartRouter.get("/cookies", async (req, res) => {
    const cookies = req.cookies.cart;
    console.log(cookies);
    const cookiesConvert = JSON.parse(cookies);
    console.log(cookiesConvert.name);

    const cart = await prisma.cart.create({
        data: {
            cookies: cookies,
            cartGame: {
                create: {
                    game: {
                        connect: {
                            name: "Game 1",
                        },
                    },
                },
            },
        },
    });

    return res.sendStatus(200);
});
