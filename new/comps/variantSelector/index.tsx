export default function VariantSelector(props:any) {
    return (
        <div className="flex flex-row items-center gap-2 sm:justify-start justify-center flex-wrap">

            {props.variants?.map((variant:any) => (
                <button className={`btn normal-case ${props.variant.id === variant.node.id ? 'btn-primary' : 'btn-neutral'}`}
                    onClick={() => props.setVariant(variant.node)}
                    disabled={variant.node.availableForSale === false}
                >
                    {variant.node.title}
                </button>
            ))}

        </div>
    )
}