import { GameType, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function run() {
    const client = await prisma.client.upsert({
        where: {
            email: "elouandmt@icloud.com",
        },
        update: {},
        create: {
            firstName: "Elouan",
            lastName: "DUMONT",
            email: "elouandmt@icloud.com",
            password: "123456",
        },
    });
    const game = await prisma.game.upsert({
        where: {
            id: 1,
        },
        update: {},
        create: {
            name: "Game 1",
            description: "Game 1 description",
            price: 100,
            stock: 10,
            duration: "60 minutes",
            minPlayer: 2,
            maxPlayer: 4,
            type: GameType.BoardGame,
        },
    });
    const invoice = await prisma.invoice.upsert({
        where: {
            id: 1,
        },
        update: {},
        create: {
            isPaid: false,
            paidAt: new Date(),
            client: {
                connect: {
                    id: 1,
                },
            },
            finalPrice: 100,
        },
    });
    const invoiceGames = await prisma.invoicesGames.upsert({
        where: {
            id: 1,
        },
        update: {},
        create: {
            invoice: {
                connect: {
                    id: 1,
                },
            },
            game: {
                connect: {
                    id: 1,
                },
            },
        },
    });
    console.log({ client, game, invoice, invoiceGames });
}

run()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
