export default function ProductPictures(props:any) {
    return (
        <div className="flex flex-row justify-center items-center -mt-2">
            {props.pictures.map((image:any) => (
                <img src={image.node.originalSrc} className="w-16 h-16 rounded-lg mr-2 border border-zinc-700 cursor-pointer hover:opacity-80 transition-all ease-in-out duration-150"
                    onClick={() => props.setCurrentPicture(image.node.originalSrc)}
                />
            ))}
        </div>
    )
}