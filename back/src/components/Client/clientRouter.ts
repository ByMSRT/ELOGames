import express from "express";
import { PrismaClient } from "@prisma/client";

export const clientRouter = express.Router();

const prisma = new PrismaClient();

clientRouter.get("/all", async (req, res) => {
    try {
        const clients = await prisma.client.findMany();
        res.status(200).json(clients);
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});

clientRouter.post("/add", async (req, res) => {
    try {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const address = req.body.address;
        const phone = req.body.phone;

        if (!firstName || !lastName || !email || !address || !phone) {
            return res.status(400).json({ message: "Missing fields" });
        }

        const client = await prisma.client.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                address: address,
                phone: phone,
            },
        });
        res.status(200).json(client);
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});

clientRouter.delete("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const client = await prisma.client.delete({
            where: {
                id: id,
            },
        });
        res.status(200).json({ message: "Client deleted" });
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});

clientRouter.put("/update/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const getClient = await prisma.client.findFirstOrThrow({
            where: {
                id: id,
            },
        });

        const firstName = req.body.firstName || getClient.firstName;
        const lastName = req.body.lastName || getClient.lastName;
        const email = req.body.email || getClient.email;
        const address = req.body.address || getClient.address;
        const phone = req.body.phone || getClient.phone;

        if (!firstName || !lastName || !email || !address || !phone) {
            return res.status(400).json({ message: "Missing fields" });
        }

        const client = await prisma.client.update({
            where: {
                id: id,
            },
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                address: address,
                phone: phone,
            },
        });
        res.status(200).json(client);
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});

clientRouter.get("/invoice/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const client = await prisma.client.findFirstOrThrow({
            where: {
                id: id,
            },
        });

        const invoices = await prisma.invoice.findMany({
            where: {
                clientId: id,
            },
        });
        const clientInvoices = { client, invoices };

        res.status(200).json(clientInvoices);
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});
