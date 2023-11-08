import { updateClientByID } from "../../data/clients";

export default defineEventHandler(async (event) => {
    const id = Number(event.context.params.id);
    const data = await readBody(event);
    try {
        return await updateClientByID(id, data);
    } catch (error: any) {
        throw new Error(error);
    }
});
