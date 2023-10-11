import dotenv from 'dotenv';

// load environment variables
dotenv.config();

async function getAllProducts() {
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/all`);

    const { products } = await req.json();

    // filter out products that are not published
    products.data = products.data.filter((product: any) => product.status === 'active');

    return products.data;
}

export default getAllProducts;