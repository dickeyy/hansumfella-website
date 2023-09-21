import { useState } from "react"
import ProductList from "./productList"

export default function Shop(props:any) {

    const [products, setProducts] = useState(props.products)

    return (
        <div id='shop-main-page' className="flex flex-col justify-center items-center">
            <ProductList products={products} />
        </div>
    )
}