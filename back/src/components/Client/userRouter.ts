import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { verifyToken } from "../../middleware/auth";
import { verifyAdmin } from "../../middleware/admin";
dotenv.config();

export const userRouter = express.Router();

const prisma = new PrismaClient();

userRouter.post("/register", async (req, res) => {
    try {
        const { email, password, firstName, lastName, isAdmin } = req.body;

        const userExist = await prisma.client.findUnique({
            where: {
                email: email,
            },
        });

        if (userExist) {
            res.status(409).json({ message: "User already exist" });
        }

        const hash = await bcrypt.hash(password, 10);

        const client = await prisma.client.create({
            data: {
                email: email,
                password: hash,
                firstName: firstName,
                lastName: lastName,
                isAdmin: isAdmin,
            },
        });

        const token = jwt.sign(
            {
                email: client.email,
            },
            process.env.JWT_ACCESS_SECRET as string,
            {
                expiresIn: "1h",
            }
        );

        const update = await prisma.client.update({
            where: {
                email: client.email,
            },
            data: {
                token: token,
            },
        });
        res.status(201).json(update);
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});

userRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const client = await prisma.client.findUnique({
            where: {
                email: email,
            },
        });

        if (!client) {
            res.status(401).json({ message: "User does not exist" });
        }

        if (client?.password === null) {
            res.status(401).json({ message: "User does not exist" });
        } else {
            if (client && (await bcrypt.compare(password, client.password))) {
                const token = jwt.sign(
                    {
                        email: client.email,
                    },
                    process.env.JWT_ACCESS_SECRET as string,
                    {
                        expiresIn: "2h",
                    }
                );
                const update = await prisma.client.update({
                    where: {
                        email: client.email,
                    },
                    data: {
                        token: token,
                    },
                });
                res.status(200).json(token);
            } else {
                res.status(401).json({ message: "Wrong password" });
            }
        }
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});

userRouter.put("/update", verifyToken, async (req, res) => {
    try {
        const oldPassword = req.body.oldPassword;
        const newPassword = req.body.newPassword;

        const getToken = req.headers["authorization"];
        const token = getToken && getToken.split(" ")[1];

        const client = await prisma.client.findFirstOrThrow({
            where: {
                token: token,
            },
        });

        if (client.password !== null) {
            if (await bcrypt.compare(oldPassword, client.password)) {
                const hash = await bcrypt.hash(newPassword, 10);

                const update = await prisma.client.update({
                    where: {
                        email: client.email,
                    },
                    data: {
                        password: hash,
                    },
                });

                res.status(200).json(update);
            } else {
                res.status(401).json({ message: "Wrong password" });
            }
        }
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});

userRouter.get("/profile", verifyToken, async (req, res) => {
    try {
        const getToken = req.headers["authorization"];
        const token = getToken && getToken.split(" ")[1];

        const client = await prisma.client.findFirstOrThrow({
            where: {
                token: token,
            },
        });
        res.status(200).json(client);
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});

userRouter.post("/logout", verifyToken, async (req, res) => {
    try {
        const getToken = req.headers["authorization"];
        const token = getToken && getToken.split(" ")[1];

        const client = await prisma.client.findFirstOrThrow({
            where: {
                token: token,
            },
        });

        const update = await prisma.client.update({
            where: {
                email: client.email,
            },
            data: {
                token: null,
            },
        });

        res.status(200).json(update);
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});

userRouter.put("/profile", verifyToken, async (req, res) => {
    try {
        const getToken = req.headers["authorization"];
        const token = getToken && getToken.split(" ")[1];

        const client = await prisma.client.findFirstOrThrow({
            where: {
                token: token,
            },
        });

        const firstName = req.body.firstName || client.firstName;
        const lastName = req.body.lastName || client.lastName;
        const email = req.body.email || client.email;
        const address = req.body.address || client.address;
        const phone = req.body.phone || client.phone;

        const update = await prisma.client.update({
            where: {
                email: client.email,
            },
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                address: address,
                phone: phone,
            },
        });

        res.status(200).json(update);
    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});
