"use client";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "./ui/button";
import { StarIcon, StarsIcon, Trash2Icon } from "lucide-react";
import { getCheckoutURL, removeFromCart } from "@/lib/cart";
import { toast } from "sonner";
import useCartStore from "@/stores/cart-store";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CartSheet({
    cart,
    isOpen,
    setIsOpen
}: {
    cart: any;
    isOpen: boolean;
    setIsOpen: any;
}) {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const USDollar = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    const remove = async (lineId: string) => {
        const success = await removeFromCart(cart.id, lineId);
        if (success) {
            useCartStore.setState({
                state: "dirty"
            });
            toast.success("Item removed from cart");
        } else {
            useCartStore.setState({
                state: "dirty"
            });
            toast.error("Error removing item from cart");
        }
    };

    const checkout = async () => {
        setIsLoading(true);
        const url = await getCheckoutURL(cart.id);
        if (url) {
            router.push(url);
        } else {
            toast.error("Error creating checkout");
        }
    };

    return (
        <Sheet open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <SheetContent className="w-screen sm:w-[500px]">
                <SheetHeader className="flex flex-col items-start">
                    <SheetTitle className="text-3xl">Cart</SheetTitle>
                    <SheetDescription>Click on an item to remove it.</SheetDescription>
                </SheetHeader>
                {cart?.lines?.edges?.length != 0 ? (
                    <>
                        <ScrollArea className="h-[75%] w-full pr-3">
                            <div className="mt-4 flex flex-col items-start gap-2">
                                {cart?.lines?.edges ? (
                                    <>
                                        {cart?.lines?.edges.map((edge: any) => (
                                            <div
                                                key={edge?.node?.id}
                                                className="flex w-full cursor-pointer items-start justify-start gap-2 rounded-lg border bg-secondary p-2
                                            transition-all duration-200 ease-in-out hover:bg-destructive hover:text-destructive-foreground
                                            "
                                                onClick={() => {
                                                    remove(edge?.node?.id);
                                                }}
                                            >
                                                <p className="text-md font-normal text-muted-foreground">
                                                    {edge?.node?.quantity}x
                                                </p>
                                                <div className="flex flex-col items-start justify-center">
                                                    <p className="text-lg font-medium">
                                                        {edge?.node?.merchandise?.product?.title}
                                                    </p>
                                                    <p className="text-md font-light text-muted-foreground">
                                                        {edge?.node?.merchandise?.title ==
                                                        "Default Title"
                                                            ? ""
                                                            : edge?.node?.merchandise?.title}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </ScrollArea>
                        <div className="mt-4 flex w-full flex-col items-center gap-2">
                            <div className="flex w-full flex-col items-start">
                                <p className="text-lg font-medium">
                                    Total: {USDollar.format(cart?.cost?.totalAmount?.amount)}
                                </p>
                                <p className="text-md font-light text-muted-foreground">
                                    Subtotal: {USDollar.format(cart?.cost?.subtotalAmount?.amount)}
                                </p>
                            </div>
                            <Button
                                variant={"default"}
                                size={"lg"}
                                className="flex w-full items-center gap-2"
                                onClick={checkout}
                                disabled={cart?.lines?.edges?.length == 0 || isLoading}
                            >
                                <StarsIcon className="h-5 w-5 fill-primary-foreground" />
                                Checkout
                            </Button>
                        </div>
                    </>
                ) : (
                    <div className="mt-12 flex h-1/2 w-full items-center justify-center rounded-lg border-2 border-dashed">
                        <h1 className="text-lg font-medium text-muted-foreground">
                            Your cart is empty.
                        </h1>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}
