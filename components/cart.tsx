"use client";

import { ShoppingBasketIcon } from "lucide-react";
import { Button } from "./ui/button";
import useCartStore from "@/stores/cart-store";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { createCart, loadCart } from "@/lib/cart";
import CartSheet from "./cart-sheet";

export default function Cart() {
    const { cartId, cartLineItems, state, cart } = useCartStore();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        if (state == "dirty" && cartId) {
            loadCart(cartId || "").then((cart) => {
                if (cart) {
                    useCartStore.setState({
                        cartLineItems: cart.cartId.data.cart.lines.edges?.map(
                            (edge: any) => edge?.node
                        ),
                        cart: cart.cartId.data.cart,
                        state: "clean"
                    });
                }
            });
        }

        if (!cartId) {
            createCart().then((cartId) => {
                useCartStore.setState({
                    cartId,
                    state: "clean"
                });
            });
        }
    }, [state, cartId]);

    useEffect(() => {
        let count = 0;
        cartLineItems?.forEach((item) => {
            count += item.quantity;
        });
        setItemCount(count);
    }, [cartLineItems]);

    return (
        <>
            {cartId ? (
                <Button
                    variant="default"
                    size="icon"
                    className="h-fit w-fit px-1 py-1"
                    onClick={() => {
                        setIsCartOpen(!isCartOpen);
                    }}
                >
                    {cartLineItems?.length > 0 && (
                        <p className="ml-1 mr-2 text-xs text-primary-foreground">
                            {itemCount.toLocaleString("en-US")}
                        </p>
                    )}
                    <ShoppingBasketIcon className="h-[20px] w-[18px]" />

                    <span className="sr-only">Open cart</span>
                </Button>
            ) : (
                <Skeleton className="h-6 w-6 bg-background"></Skeleton>
            )}
            <CartSheet cart={cart} isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
        </>
    );
}
