async function getProductById(id: string) {
    try {
        const req = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/product/id?id=" + id);
        const product = await req.json();
        return product;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default getProductById;
