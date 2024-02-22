import { SpecificProductType } from "@/types/specific-product";
import axios from "axios";

// set the api url to the current window domain
const apiURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

async function getProductById(id: string): Promise<SpecificProductType | null> {
    try {
        const req = await axios.get(`${apiURL}/api/product/id?id=${id}`);
        const res = req.data;
        return res;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default getProductById;
