import { GameType, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function run() {
    const client = await prisma.client.create({
        data: {
            firstName: "Elouan",
            lastName: "DUMONT",
            email: "elouandmt@icloud.com",
            password: "123456",
        },
    });
    const game = await prisma.game.create({
        data: {
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
    const invoice = await prisma.invoice.create({
        data: {
            isPaid: false,
            paidAt: new Date(),
            client: {
                connect: {
                    id: client.id,
                },
            },
            finalPrice: 100,
        },
    });
    const invoiceGames = await prisma.invoicesGames.create({
        data: {
            invoice: {
                connect: {
                    id: invoice.id,
                },
            },
            game: {
                connect: {
                    id: game.id,
                },
            },
        },
    });
}

run()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
