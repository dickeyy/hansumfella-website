"use client";

import getAllProducts from "@/lib/get-all-products";
import { GenralProductType } from "@/types/general-product";
import Product from "./product";
import { Suspense, useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { toast } from "sonner";

export default function ProductList() {
    const [products, setProudcts] = useState<GenralProductType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllProducts().then((products) => {
            if (!products) {
                toast.error("Error fetching products");
                return;
            }
            setProudcts(products);
            setIsLoading(false);
        });
    }, []);

    return (
        <div id="shop" className="flex w-full flex-col items-start justify-start gap-4">
            <h1 className="text-3xl font-semibold">All Products</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {isLoading ? (
                    <Skeleton className="h-12 w-12"></Skeleton>
                ) : (
                    <>
                        {products &&
                            products.map((product) => (
                                <Product key={product.id} product={product} />
                            ))}
                    </>
                )}
            </div>
        </div>
    );
}
