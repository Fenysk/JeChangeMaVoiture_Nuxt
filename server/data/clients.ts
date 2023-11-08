import prisma from "./prisma";

interface ClientDto {
    name: string;
    age: number;
    profession: string;
    testimony: string;
    image: string;
}

export async function getClients() {
    const clients = await prisma.client.findMany();
    return clients;
}

export async function getClientByID(id: string) {
    try {
        const client = await prisma.client.findUnique({ where: { id } });
        return client;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function createClients(data: ClientDto) {
    try {
        const newClient = await prisma.client.create({ data });
        return newClient;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateClientByID(id: string, data: ClientDto) {
    try {
        const updatedClient = await prisma.client.update({
            where: { id },
            data,
        });
        return updatedClient;
    } catch (error: any) {
        throw new Error(error);
    }
}
