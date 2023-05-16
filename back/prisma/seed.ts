import { GameType, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function run() {
    const client = await prisma.client.upsert({
        where: { id: "a5ac7396-9dda-4c12-a5af-8251652e7713" || 0 },
        update: {},
        create: {
            id: "a5ac7396-9dda-4c12-a5af-8251652e7713",
            firstName: "Elouan",
            lastName: "DUMONT",
            email: "elouandmt@icloud.com",
            password: "123456",
        },
    });
    const game = await prisma.game.upsert({
        where: { id: "4eefd8a8-dcf9-445f-860f-b4c1aee65625" || 0 },
        update: {},
        create: {
            id: "4eefd8a8-dcf9-445f-860f-b4c1aee65625",
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
        where: { id: "809892a4-8cf6-43da-b496-7cb343a1f6e9" || 0 },
        update: {},
        create: {
            id: "809892a4-8cf6-43da-b496-7cb343a1f6e9",
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

    const invoiceGames = await prisma.invoicesGames.upsert({
        where: { id: 1 || 0 },
        update: {},
        create: {
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
