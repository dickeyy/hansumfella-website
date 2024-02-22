import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface CartState {
    cartId: string | null;
    cartLineItems: any[];
    state: "clean" | "dirty";
    cart: any;
}

const useCartStore = create<CartState>()(
    devtools(
        persist(
            (set) => ({
                cartId: null,
                cartLineItems: [],
                state: "clean",
                cart: null
            }),
            {
                name: "cart-storage",
                getStorage: () => localStorage
            }
        )
    )
);

useCartStore.subscribe(async (oldState, newState) => {
    if (oldState.cartId !== newState.cartId) {
        // reset the state
        useCartStore.setState({
            cartLineItems: [],
            state: "dirty"
        });
    }
});

export default useCartStore;
