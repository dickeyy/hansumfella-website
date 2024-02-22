// set the api url to the current window domain
let apiURL: string;
if (typeof window !== "undefined") {
    apiURL = window.location.origin;
} else {
    apiURL = "https://hansumfellla.com";
}

async function getAllProducts() {
    try {
        const req = await fetch(apiURL + "/api/product/all");
        if (!req.ok) throw new Error("Failed to fetch products");

        const products = await req.json();

        // filter out products that are not published
        products.data = products.data.filter((product: any) => product.status === "active");
        return products.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default getAllProducts;
