async function getProductById(id:string) {
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/id?id=${id}`);

    const product = await req.json();

    return product;
}

export default getProductById;