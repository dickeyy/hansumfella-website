import ProductNormalSize from "../product/normal";

export default function ProductList(props:any) {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:w-[90%] w-full gap-4">

            <h1 className="lg:col-span-3 md:col-span-2 sm:col-span-1 text-4xl font-bold ">All Products</h1>

            {props.products?.map((product:any) => (
                <ProductNormalSize product={product} />
            ))}
        </div>
    )
}