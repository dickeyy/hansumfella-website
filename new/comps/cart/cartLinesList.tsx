export default function CartLinesList(props:any) {
    
    return (
        <>
            {props?.lines?.lines?.length > 0 ? (
                <>
                    {props.lines?.lines?.map((line:any) => (
                        <div className="flex flex-row justify-between items-center border rounded-lg p-2 border-zinc-700 mb-2
                            hover:bg-red-500 transition-all ease-in-out duration-150 hover:opacity-80 hover:border-red-800 cursor-pointer
                        "
                            onClick={() => {
                                props.removeItem(line.node.id)
                            }}
                        >

                            <div className="flex flex-row items-center">
                                <img src={line.node.merchandise.product.images.edges[0].node.originalSrc} className="w-16 h-16 rounded-lg mr-2 border border-zinc-800" />

                                <div className="flex flex-col">
                                    <h1 className="text-xl font-bold">{line.node.merchandise.product.title}</h1>
                                    {line.node.merchandise.title !== 'Default Title' ? (
                                        <h1 className="text-lg font-normal">{line.node.merchandise.title}</h1>
                                    ) : (
                                        null
                                    )}
                                </div>
                            </div>
                            <h1 className="text-lg font-normal ml-2">{line.node.quantity}x</h1>
                        </div>
                    ))}
                </>
            ) : (
                <div className="w-full p-10 py-20 border border-zinc-800 rounded-lg text-center">
                    <h1 className="text-2xl font-medium mr-5">Your cart is empty</h1>
                </div>
            )}
        </>
    )
}