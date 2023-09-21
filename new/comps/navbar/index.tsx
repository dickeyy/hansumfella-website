import Cart from "../cart";

export default function Navbar(props:any) {
    return (
        <div className="flex justify-center items-center w-screen sticky top-3 px-2 z-50">
            <div className= "w-full rounded-xl navbar glassEffect">

                <div className="navbar-start flex-1">
                    <a className='btn btn-ghost normal-case' href="/">
                        <img src="/images/hansum-circle.png" className="h-8" />
                        <p className="text-xl font-bold">hansumfella</p>
                    </a>
                </div>

                <div className="navbar-center sm:flex hidden">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="/#shop-main-page">Shop</a></li>
                        <li><a href="https://streamlabs.com/hansumfella/tip" target="_blank">Donate</a></li>
                    </ul>
                </div>

                <div className="navbar-end flex-1">
                    <Cart />
                </div>
            </div>
        </div>
    )
}