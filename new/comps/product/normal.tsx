export default function ProductNormalSize(props:any) {
    return (
        <a href={`/product/${props.product.id}`} className="col-span-1 flex justify-center items-center glassEffect p-4 rounded-lg hover:opacity-70 transition-all ease-in-out duration-150 text-center">
            <div>

                <img src={props.product.images[0].src} className="w-full rounded-lg mb-6" />

                <h1 className="text-xl font-bold">{props.product.title}</h1>

                <p className="text-lg font-medium text-zinc-400">${props.product.variants[0].price}</p>

            </div>
        </a>
    )
}