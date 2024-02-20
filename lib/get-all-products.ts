async function getAllProducts() {
    try {
        const req = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/product/all");
        if (!req.ok) throw new Error("Failed to fetch products");

        const products = await req.json();
        console.log(products);

        // filter out products that are not published
        products.data = products.data.filter((product: any) => product.status === "active");
        return products.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default getAllProducts;
