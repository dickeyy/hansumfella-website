import { SpecificProductType } from "@/types/specific-product";
import axios from "axios";

async function getProductById(id: string): Promise<SpecificProductType | null> {
    try {
        const req = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/product/id?id=${id}`);
        const res = req.data;
        return res;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default getProductById;
