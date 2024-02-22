import { SpecificProductType } from "@/types/specific-product";
import axios from "axios";

// set the api url to the current window domain
let apiURL: string;
if (typeof window !== "undefined") {
    apiURL = window.location.origin;
} else {
    apiURL = "https://hansumfellla.com";
}

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
