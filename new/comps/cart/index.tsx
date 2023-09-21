import { FaShoppingCart } from "react-icons/fa";
import CartDrawer from "./drawer";
import { useEffect, useState } from "react";

export default function Cart(props:any) {

    const [cart, setCart] = useState(null as any);

    const [isCheckoutLoading, setIsCheckoutLoading] = useState(false)
    const [isClearLoading, setIsClearLoading] = useState(false)

    const clearCart = () => {
        setIsClearLoading(true)

        window.localStorage.removeItem('hansum:shopify:cart')
        window.localStorage.setItem('hansum:shopify:status', 'dirty')

        setIsClearLoading(false)
    }

    const getCheckoutUrl = async () => {
        setIsCheckoutLoading(true)

        const res = await fetch(`/api/checkout/create?cartId=${cart.id}`)

        const data = await res.json()

        setIsCheckoutLoading(false)

        if (!res.ok) {
            console.error(res.statusText)
            return
        }

        window.location.href = data.data.data.cart.checkoutUrl
    }

    const removeLineItem = async (lineId: string) => {
        const res = await fetch('/api/cart/remove', {
            method: 'POST',
            body: JSON.stringify({
                cartId: cart?.id,
                lineIds: [lineId]
            })
        })

        if (!res.ok) {
            console.error(res.statusText)
            return
        }

        window.localStorage.setItem('hansum:shopify:status', 'dirty')
    }

    useEffect(() => {

        if (typeof window === 'undefined') return

        async function getCart() {
            setIsCheckoutLoading(false)

            let localCartData = JSON.parse(
                window?.localStorage?.getItem('hansum:shopify:cart') as any
            )

            if (localCartData) {
                const existingCart = await fetch('/api/cart/load', {
                    method: 'POST',
                    body: JSON.stringify({
                        cartId: localCartData.cartId
                    })
                })

                const existingCartData = await existingCart.json()

                setCart({
                    id: localCartData.cartId,
                    lines: existingCartData.data.data.cart.lines.edges,
                    checkoutUrl: existingCartData.data.data.cart.checkoutUrl,
                    estimatedCost: existingCartData.data.data.cart.cost.subtotalAmount.amount,
                })

                return
            }

            localCartData = await fetch('/api/cart/create').then(res => res.json())

            // make sure the id returned is a global id
            if (!localCartData.cartId.startsWith('gid')) {
                console.error('Cart id is not a global id')
                return
            }

            setCart({
                id: localCartData.cartId,
                lines: [],
                checkoutUrl: null,
                estimatedCost: null,
            })

            window.localStorage.setItem(
                'hansum:shopify:cart',
                JSON.stringify(localCartData)
            )
        }

        getCart()

        const washInterval = setInterval(() => {
            const state = window.localStorage.getItem('hansum:shopify:status')

            if (state === 'dirty') {
                getCart()
                window.localStorage.setItem('hansum:shopify:status', 'clean')
            }
        }, 100)

        return () => {
            clearInterval(washInterval)
        }

    }, [])

    return (
        <div>
                
            <label htmlFor="my-drawer" className="btn btn-ghost btn-md m-0 indicator ">
                {cart?.lines?.length > 0 ? (
                    <span className="indicator-item indicator-start indicator-middle badge badge-primary">{cart.lines.length}</span> 
                ) : (
                    null
                )}
                <FaShoppingCart className="text-xl" />
            </label>

            <CartDrawer 
                cart={cart} 
                clearCart={clearCart} 
                removeItem={removeLineItem} 
                getCheckoutUrl={getCheckoutUrl}
                isCheckoutLoading={isCheckoutLoading} 
                isClearLoading={isClearLoading}
            />

        </div>
    )
}