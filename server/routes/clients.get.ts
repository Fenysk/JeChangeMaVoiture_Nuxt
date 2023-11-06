import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const clients = await prisma.client.findMany();
    return clients;
});
