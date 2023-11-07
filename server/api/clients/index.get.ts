import { getClients } from "../../data/clients";

export default defineEventHandler(async () => {
    return await getClients();
});
