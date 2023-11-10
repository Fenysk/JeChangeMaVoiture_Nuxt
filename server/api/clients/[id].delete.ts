import { deleteClientByID } from "../../data/clients";

export default defineEventHandler(async (event) => {
    const id = Number(event.context.params.id);
    try {
        return await deleteClientByID(id);
    } catch (error: any) {
        throw new Error(error);
    }
});
