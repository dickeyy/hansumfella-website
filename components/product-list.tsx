import getAllProducts from "@/lib/get-all-products";
import { ProductType } from "@/types/product";
import Product from "./product";

async function getProducts() {
    const products: ProductType[] = await getAllProducts();
    return products;
}

export default async function ProductList() {
    const products: ProductType[] = await getProducts();

    return (
        <div id="shop" className="flex w-full flex-col items-start justify-start gap-4">
            <h1 className="text-3xl font-semibold">All Products</h1>
            <div className="grid grid-cols-4 gap-4">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
