import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export default function VariantSelector({
    selectedVariant,
    product
}: {
    selectedVariant: any;
    product: any;
}) {
    return (
        <Select aria-label="Select a variant">
            <SelectTrigger className="w-full bg-input/20">
                <SelectValue placeholder={selectedVariant?.title} />
            </SelectTrigger>
            <SelectContent>
                {product.variants.nodes.map((variant: any) => (
                    <SelectItem
                        key={variant.id}
                        value={variant.id}
                        aria-label={variant.title}
                        disabled={variant.availableForSale === false}
                        className={`${
                            variant.availableForSale === false
                                ? "cursor-not-allowed text-red-500 text-opacity-50 line-through"
                                : ""
                        }`}
                    >
                        {variant.title} -{" "}
                        {"$" + parseFloat(variant?.price?.amount ?? "0.00").toFixed(2)}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
