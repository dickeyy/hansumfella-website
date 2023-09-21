import { useState } from "react"
import { FaCartPlus } from "react-icons/fa"

export default function AddToCartButton(props:any) {

    const quantity = props.quantity
    const variant = props.variant

    const [isDisabled, setIsDisabled] = useState(false)

    const addToCart = async () => {
        setIsDisabled(true)
        const cartId = JSON.parse(
            window.localStorage.getItem('hansum:shopify:cart') as any
        ).cartId

        if (!cartId) {
            console.error('No cart ID found')
            return
        }

        const res = await fetch('/api/cart/add', {
            method: 'POST',
            body: JSON.stringify({
                cartId: cartId,
                lines: [
                    {
                        quantity: Number(quantity),
                        merchandiseId: variant.id,
                    }
                ]
            })
        })

        if (!res.ok) {
            console.error(res.statusText)
            return
        }
        window.localStorage.setItem('hansum:shopify:status', 'dirty')
        
        setIsDisabled(false)

        props.setToastTitle('Added to Cart')
        props.setToastType('success')

        props.setShowToast(true)

        setTimeout(() => {
            props.setShowToast(false)
        }, 5000)
    }

    return (

        <button className="btn btn-primary btn-lg normal-case" onClick={addToCart}
            disabled={isDisabled}
        >
            <FaCartPlus className="text-xl" /> Add to Cart
        </button>
    )
}