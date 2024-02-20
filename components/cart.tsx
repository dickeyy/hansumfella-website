import { ShoppingBasketIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Cart() {
    return (
        <Button variant="default" size="icon" className="h-fit w-fit px-1 py-1">
            <ShoppingBasketIcon className="h-[20px] w-[18px]" />
            <span className="sr-only">Open cart</span>
        </Button>
    );
}
