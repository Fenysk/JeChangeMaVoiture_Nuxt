import { getClientByID } from "../../data/clients";

export default defineEventHandler(async (event) => {
    const id = Number(event.context.params.id);
    try {
        return await getClientByID(id);
    } catch (error: any) {
        throw new Error(error);
    }
});
