import prisma from "./prisma";

export async function getClients() {
    const clients = await prisma.client.findMany();
    return clients;
}