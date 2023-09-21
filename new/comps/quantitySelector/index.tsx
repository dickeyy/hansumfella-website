export default function QuantitySelector(props:any) {
    return (
        <div className="flex join">
            <button className="btn btn-primary btn-md join-item" 
                disabled={props.quantity === 1}
                onClick={() => props.setQuantity(props.quantity - 1)}
            >
                -
            </button>

            <input type="number" className="input join-item input-bordered sm:w-1/3 w-full" max={99} min={1} value={props.quantity}
                onChange={(e) => {
                    if (e.target.value === '') {
                        props.setQuantity(1)
                    } else {
                        props.setQuantity(parseInt(e.target.value))
                    }
                }}
            />

            <button className="btn btn-primary btn-md join-item"
                disabled={props.quantity >= 99}
                onClick={() => props.setQuantity(props.quantity + 1)}
            >
                +
            </button>

        </div>
    )
}