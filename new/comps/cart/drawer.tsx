import { FaTimes } from "react-icons/fa";
import CartLinesList from "./cartLinesList";
import CartFooter from "./cartFooter";

export default function CartDrawer(props:any) {

    return (
        <div className="drawer drawer-end z-50">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay w-screen h-screen"></label>
                <ul className="menu p-6 sm:w-1/2 w-full min-h-screen text-base-content bg-base-200 border border-zinc-800  rounded-lg flex flex-col ">
                
                    <div className="flex flex-row justify-between items-center mb-5">
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-bold">Cart</h1>
                            <p className="text-lg font-normal text-zinc-500">Click an item to remove it</p>
                        </div>
                        <label htmlFor="my-drawer" className="btn btn-ghost btn-md m-0 ">
                            <FaTimes className="text-xl" />
                        </label>
                    </div>
                    
                    <CartLinesList lines={props.cart} removeItem={props.removeItem} />

                    {props.cart?.lines?.length > 0 ? (
                        <CartFooter cart={props.cart} clearCart={props.clearCart} checkout={props.getCheckoutUrl} 
                            isCheckoutLoading={props.isCheckoutLoading} 
                            isClearLoading={props.isClearLoading}
                        />
                    ) : (
                        null
                    )}
                
                </ul>

            </div>
        </div>
    )
}