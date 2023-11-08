import { createClients } from "../../data/clients";

export default defineEventHandler(async (event) => {
    try {
        const data = await readBody(event);
        return await createClients(data);
    } catch (error: any) {
        throw new Error(error);
    }
});
