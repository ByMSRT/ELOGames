import express from "express";
import { PrismaClient } from "@prisma/client";
import { verifyAdmin } from "../../middleware/admin";

const prisma = new PrismaClient();

export const invoicesRouter = express.Router();

invoicesRouter.get("/all", verifyAdmin, async (req, res) => {
    try {
        const invoices = await prisma.invoice.findMany();
        res.status(200).json(invoices);
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});

invoicesRouter.post("/add", async (req, res) => {
    try {
        const paid = req.body.paid || false;
        const price = req.body.price;
        const client = req.body.client;
        const billingAddress = req.body.billingAddress || null;
        const shippingAddress = req.body.shippingAddress || null;

        if (!price || !client) {
            return res.status(400).json({ message: "Missing fields" });
        }

        const invoice = await prisma.invoice.create({
            data: {
                isPaid: paid,
                finalPrice: price,
                billingAddress: billingAddress,
                shippingAddress: shippingAddress,
                clientId: client,
            },
        });
        res.status(200).json(invoice);
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
