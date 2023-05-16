import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const verifyAdmin = async (req: any, res: any, next: any) => {
    const token = await prisma.client.findFirst({
        where: {
            token: req.headers["authorization"]?.split(" ")[1],
        },
    });

    if (!token?.isAdmin) {
        return res.status(401).send("Unauthorized");
    } else {
        return next();
    }
};
