import { useEffect, useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa";

export default function CartFooter(props:any) {

    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        if (props.cart?.lines?.length > 0) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    })

    return (
        <div className="w-full mt-4 bottom-10">
            <div className="flex flex-row justify-between items-center mb-1">
                <h1 className="text-4xl font-bold">Subtotal:</h1>
                <h1 className="text-4xl font-bold">{Number(props.cart?.estimatedCost).toLocaleString("en-US", { style: "currency", currency: "USD"}) || '$0.00'}</h1>
            </div>
            <p className="text-lg mb-5 text-zinc-500">Tax and shipping calculated at checkout</p>
            <button className="btn btn-primary btn-block normal-case"
                disabled={isDisabled || props.isCheckoutLoading}
                onClick={() => {
                    props.checkout()
                }}
            >
                <FaStar className="text-xl" /> Checkout
            </button>

            <button className="btn btn-primary btn-outline btn-block normal-case mt-5"
                disabled={isDisabled || props.isClearLoading}
                onClick={() => {
                    props.clearCart()
                }}
            >
                <FaTrash className="text-xl" /> Clear Cart
            </button>
        </div>
    )
} 