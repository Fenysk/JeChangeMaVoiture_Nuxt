import { writeFile } from "fs/promises";

export async function uploadImage(formData: any) {
    try {
        const file = formData.find((item: any) => item.name === "image");
        const path = "/photos/clients/" + file.filename;
        await writeFile("./public" + path, file.data);
        return path;
    } catch (error: any) {
        throw new Error(error);
    }
}
