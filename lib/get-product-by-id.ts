import { SpecificProductType } from "@/types/specific-product";
import axios from "axios";

const apiURL = window.location.origin;

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
