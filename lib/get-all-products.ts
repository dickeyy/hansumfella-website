import axios from "axios";

// set the api url to the current window domain
const apiURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

async function getAllProducts() {
    try {
        const req = await axios.get(`${apiURL}/api/product/all`);

        if (req.status !== 200) {
            return null;
        }

        const products = await req.data;

        // filter out products that are not published
        products.data = products.data.filter((product: any) => product.status === "active");
        return products.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default getAllProducts;
