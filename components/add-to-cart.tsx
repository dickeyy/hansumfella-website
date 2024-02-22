"use client";

import { ShoppingBasketIcon } from "lucide-react";
import { Button } from "./ui/button";
import { addToCart } from "@/lib/cart";
import useCartStore from "@/stores/cart-store";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export default function AddToCartButton({
    productId,
    quantity,
    disabled
}: {
    productId: string;
    quantity: number;
    disabled?: boolean;
}) {
    const { cartId } = useCartStore();
    const [hasS, setHasS] = useState(false);

    const onClick = async () => {
        if (!cartId) toast.error("Cart not found");
        addToCart(
            [
                {
                    merchandiseId: productId,
                    quantity
                }
            ],
            cartId || ""
        ).then((res) => {
            if (res) {
                useCartStore.setState({
                    state: "dirty"
                });
                toast.success("Added to cart");
            } else {
                toast.error("Failed to add to cart");
            }
        });
    };

    useEffect(() => {
        if (quantity == 1 || !quantity) setHasS(false);
        else setHasS(true);
    }, [quantity]);

    return (
        <Button
            variant={"default"}
            size="lg"
            className="mt-4 w-full items-center gap-4"
            onClick={() => {
                onClick();
            }}
            disabled={disabled}
        >
            <ShoppingBasketIcon className="h-5 w-5" />
            Add {quantity ? quantity : 1} Item{hasS ? "s" : ""} to Cart
        </Button>
    );
}
