import { getClients } from "../../data/clients";

export default defineEventHandler(async () => {
    try {
        return await getClients();
    } catch (error: any) {
        throw new Error(error);
    }
});
