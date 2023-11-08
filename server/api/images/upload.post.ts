import { uploadImage } from "../../data/images";

export default defineEventHandler(async (event) => {
    try {
        const formData = await readMultipartFormData(event);

        console.log(formData);

        const path = await uploadImage(formData);
        return path;
    } catch (error: any) {
        throw new Error(error);
    }
});
