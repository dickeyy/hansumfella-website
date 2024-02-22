import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Cart from "./cart";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar({ active }: { active?: "shop" | "donate" }) {
    return (
        <nav className="fixed top-0 z-50 flex w-[100%] items-center justify-between rounded-[0px] border bg-muted p-1 sm:top-3 sm:w-[98%] sm:rounded-lg">
            <div className="flex items-center gap-4">
                <Image src="/hansum.png" alt="logo" width={28} height={28} className="rounded-md" />
                <div className="flex items-center gap-4 text-sm font-normal">
                    <Link
                        href="/#shop"
                        className={cn(
                            active === "shop" ? "text-foreground" : "text-muted-foreground",
                            "transition-all duration-200 ease-in-out hover:text-foreground"
                        )}
                    >
                        Shop
                    </Link>
                    <Link
                        href="/donate"
                        className={cn(
                            active === "donate" ? "text-foreground" : "text-muted-foreground",
                            "transition-all duration-200 ease-in-out hover:text-foreground"
                        )}
                    >
                        Donate
                    </Link>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <ThemeToggle />
                <Cart />
            </div>
        </nav>
    );
}
