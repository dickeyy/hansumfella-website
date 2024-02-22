"use client";

import { GenralProductType } from "@/types/general-product";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useRouter } from "next/navigation";

export default function Product({ product }: { product: GenralProductType }) {
    const router = useRouter();

    return (
        <Card
            className="flex cursor-pointer flex-col justify-evenly transition-all duration-200 ease-in-out hover:scale-[1.01]"
            onClick={() => router.push("/product/" + product.id)}
        >
            <CardHeader>
                <CardTitle className="font-medium">{product.title}</CardTitle>
                <CardDescription>${product.variants[0].price}</CardDescription>
            </CardHeader>
            <CardContent>
                <Image
                    src={product.images[0].src}
                    alt={product.title}
                    width={400}
                    height={400}
                    className="rounded-md"
                />
            </CardContent>
        </Card>
    );
}
