import express from "express";
import { PrismaClient } from "@prisma/client";
import { verifyAdmin } from "../../middleware/admin";

export const gameRouter = express.Router();

const prisma = new PrismaClient();

gameRouter.get("/all", async (req, res) => {
    try {
        const games = await prisma.game.findMany();
        res.status(200).json(games);
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});

gameRouter.post("/add", verifyAdmin, async (req, res) => {
    try {
        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;
        const image = req.body.image;
        const stock = req.body.stock;
        const gameType = req.body.gameType || "BoardGame";

        if (!name || !price || !stock) {
            return res.status(400).json({ message: "Missing fields" });
        }

        const game = await prisma.game.create({
            data: {
                name: name,
                price: parseFloat(price),
                description: description,
                img: image,
                stock: parseInt(stock),
                type: gameType,
            },
        });
        res.status(200).json(game);
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});

gameRouter.delete("/delete/:id", verifyAdmin, async (req, res) => {
    try {
        const id = req.params.id;

        const game = await prisma.game.delete({
            where: {
                id: id,
            },
        });
        res.status(200).json({ message: "Game deleted" });
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});

gameRouter.put("/update/:id", verifyAdmin, async (req, res) => {
    try {
        const id = req.params.id;
        const getGame = await prisma.game.findUnique({
            where: {
                id: req.params.id,
            },
        });

        if (!getGame) {
            return res.status(400).json({ message: "Game not found" });
        }

        const name = req.body.name || getGame.name;
        const price = req.body.price || getGame.price;
        const description = req.body.description || getGame.description;
        const image = req.body.image || getGame.img;
        const stock = req.body.stock || getGame.stock;
        const gameType = req.body.gameType || getGame.type;

        if (!name || !price || !stock) {
            return res.status(400).json({ message: "Missing fields" });
        }

        const game = await prisma.game.update({
            where: {
                id: id,
            },
            data: {
                name: name,
                price: parseFloat(price),
                description: description,
                img: image,
                stock: parseInt(stock),
                type: gameType,
            },
        });
        res.status(200).json(game);
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});
