"use client";

import { SpecificProductType } from "@/types/specific-product";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import AddToCartButton from "./add-to-cart";
import { Input } from "./ui/input";

export default function ProductInfoCard({ product }: { product: SpecificProductType }) {
    const [selectedVariant, setSelectedVariant] = useState(product.variants.edges[0].node);
    const [quantity, setQuantity] = useState(1);
    const [isOutOfStock, setIsOutOfStock] = useState(false);

    useEffect(() => {
        setIsOutOfStock(selectedVariant.availableForSale === false);
    }, [selectedVariant]);

    return (
        <Card>
            <CardHeader className="flex flex-col items-start justify-center">
                <h1 className="text-2xl font-semibold" aria-label="Product">
                    {product.title}
                </h1>
                <div className="flex w-full items-start gap-2">
                    <p className="text-lg font-medium" aria-label="Price">
                        ${selectedVariant.price.amount}{" "}
                    </p>
                    <p
                        className={`text-lg font-medium ${isOutOfStock ? "text-red-500" : ""}`}
                        aria-label="Stock"
                    >
                        {isOutOfStock ? "Out of stock" : ""}
                    </p>
                </div>
                <CardDescription
                    aria-label="Description"
                    dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                />
            </CardHeader>
            <CardContent>
                <div className="flex w-full flex-col items-center gap-2">
                    {product.variants.edges.length > 1 && (
                        <div className="flex w-full flex-col items-start">
                            <Select
                                aria-label="Select a variant"
                                onValueChange={(value) => {
                                    const variant = product.variants.edges.find(
                                        (v) => v.node.id === value
                                    );
                                    if (variant) {
                                        setSelectedVariant(variant.node);
                                    }
                                }}
                            >
                                <p className="text-sm font-normal">Select a variant</p>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder={selectedVariant.title} />
                                </SelectTrigger>
                                <SelectContent>
                                    {product.variants.edges.map((variant) => (
                                        <SelectItem
                                            key={variant.node.id}
                                            value={variant.node.id}
                                            aria-label={variant.node.title}
                                            disabled={variant.node.availableForSale === false}
                                            className={`${
                                                variant.node.availableForSale === false
                                                    ? "cursor-not-allowed text-red-500 text-opacity-50 line-through"
                                                    : ""
                                            }`}
                                        >
                                            {variant.node.title} - ${variant.node.price.amount}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    )}

                    <div className="flex w-full flex-col items-start justify-center ">
                        <p className="text-right text-sm font-normal">Quantity</p>
                        <div className="flex w-full items-center justify-center gap-2 rounded-lg border bg-background px-[0.15rem]">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="items-center gap-4"
                                onClick={() => setQuantity(quantity + 1)}
                                aria-label="Increment quantity"
                                disabled={quantity === 100}
                            >
                                +
                            </Button>
                            <Input
                                type="number"
                                className="w-full border-0 bg-transparent ring-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 "
                                value={quantity}
                                onChange={(e) =>
                                    setQuantity(
                                        parseInt(e.target.value) <= 100
                                            ? parseInt(e.target.value)
                                            : 100
                                    )
                                }
                                max={100}
                                min={1}
                                aria-label="Quantity"
                            />
                            <Button
                                variant="ghost"
                                size="sm"
                                className=" items-center gap-4"
                                onClick={() => setQuantity(quantity - 1)}
                                aria-label="Decrement quantity"
                                disabled={quantity === 1}
                            >
                                -
                            </Button>
                        </div>
                    </div>
                </div>
                <AddToCartButton
                    productId={selectedVariant.id}
                    quantity={quantity}
                    disabled={isOutOfStock}
                />
            </CardContent>
        </Card>
    );
}
