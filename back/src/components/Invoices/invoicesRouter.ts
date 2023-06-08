import express from "express";
import { PrismaClient } from "@prisma/client";
import { verifyAdmin } from "../../middleware/admin";
import { verifyToken } from "../../middleware/auth";

const prisma = new PrismaClient();

export const invoicesRouter = express.Router();

invoicesRouter.get("/all", verifyAdmin, async (req, res) => {
    try {
        const invoices = await prisma.invoice.findMany({
            include: {
                client: true,
                invoicesGames: {
                    include: {
                        game: true,
                    },
                },
            },
        });
        res.status(200).json(invoices);
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});

invoicesRouter.post("/add", async (req, res) => {
    try {
        const paid = req.body.paid || false;
        const client = req.body.client;
        const billingAddress = req.body.billingAddress || null;
        const shippingAddress = req.body.shippingAddress || null;
        const games: { id: string; quantity: number }[] = req.body.games;

        if (!client || !games) {
            return res.status(400).json({ message: "Missing fields" });
        }

        let finalPrice = 0;

        await Promise.all(
            games.map(async (element) => {
                const getGame = await prisma.game.findFirstOrThrow({
                    where: {
                        id: element.id,
                    },
                });

                if (getGame.stock < element.quantity) {
                    return res
                        .status(400)
                        .json({ message: "Not enough stock" });
                } else {
                    await prisma.game.update({
                        where: {
                            id: getGame.id,
                        },
                        data: {
                            stock: {
                                decrement: element.quantity,
                            },
                        },
                    });
                }
                const price = getGame.price * element.quantity;
                finalPrice += price;
            })
        ).then(() => {
            const invoice = prisma.invoice
                .create({
                    data: {
                        isPaid: paid,
                        finalPrice: finalPrice,
                        paidAt: paid ? new Date() : null,
                        billingAddress: billingAddress,
                        shippingAddress: shippingAddress,
                        clientId: client,
                        invoicesGames: {
                            create: games.map((element) => {
                                return {
                                    game: {
                                        connect: {
                                            id: element.id,
                                        },
                                    },
                                    quantity: element.quantity,
                                };
                            }),
                        },
                    },
                    include: {
                        invoicesGames: {
                            include: {
                                game: true,
                            },
                        },
                    },
                })
                .then((invoice) => {
                    res.status(200).json(invoice);
                });
        });
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});

invoicesRouter.get("/client", verifyToken, async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        const client = await prisma.client.findFirstOrThrow({
            where: {
                token: token,
            },
        });

        const invoices = await prisma.invoice.findMany({
            where: {
                clientId: client.id,
            },
        });
        res.status(200).json(invoices);
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});

invoicesRouter.delete("/delete/:id", verifyAdmin, async (req, res) => {
    try {
        const id = req.params.id;

        const invoice = await prisma.invoice.delete({
            where: {
                id: id,
            },
        });
        res.status(200).json({ message: "Invoice deleted" });
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});

invoicesRouter.put("/update/:id", verifyAdmin, async (req, res) => {
    try {
        const id = req.params.id;

        const getInvoice = await prisma.invoice.findFirstOrThrow({
            where: {
                id: id,
            },
        });

        const paid = req.body.paid || getInvoice.isPaid;
        const price = req.body.price || getInvoice.finalPrice;
        const billingAddress =
            req.body.billingAddress || getInvoice.billingAddress;
        const shippingAddress =
            req.body.shippingAddress || getInvoice.shippingAddress;
        const client = req.body.client || getInvoice.clientId;

        const invoice = await prisma.invoice.update({
            where: {
                id: id,
            },
            data: {
                billingAddress: billingAddress,
                shippingAddress: shippingAddress,
                finalPrice: parseFloat(price),
                isPaid: paid,
                clientId: client,
            },
        });
        res.status(200).json(invoice);
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});


invoicesRouter.get('/dataset', async (req, res) => {
    res.status(200).json(
        [
            {
                name: 'Date de création',
                dbColumn: 'createdAt',
                type: 'date',
            },
            {
                name: 'Date de Payement',
                dbColumn: 'paidAt',
                type: 'text',
            },
            {
                name: 'Payé',
                dbColumn: 'isPaid',
                type: 'text',
            },
            {
                name: 'Prix',
                dbColumn: 'finalPrice',
                type: 'price',
            },
        ]);
});
