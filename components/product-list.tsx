import getAllProducts from "@/lib/get-all-products";
import { GenralProductType } from "@/types/general-product";
import Product from "./product";
import { Suspense } from "react";
import { Skeleton } from "./ui/skeleton";

async function getProducts() {
    const products: GenralProductType[] = await getAllProducts();
    return products;
}

export default async function ProductList() {
    const products: GenralProductType[] = await getProducts();

    return (
        <div id="shop" className="flex w-full flex-col items-start justify-start gap-4">
            <h1 className="text-3xl font-semibold">All Products</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<Skeleton className="h-12 w-12"></Skeleton>}>
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </Suspense>
            </div>
        </div>
    );
}
