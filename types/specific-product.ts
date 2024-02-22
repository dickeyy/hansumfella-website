type SpecificProductType = {
    id: string;
    title: string;
    description: string;
    descriptionHtml: string;
    availableForSale: boolean;
    handle: string;
    totalInventory: number;
    images: SpecificImageType;
    variants: SpecificVariantType;
};

type SpecificImageType = {
    edges: SpecificImageEdgeType[];
};

type SpecificImageEdgeType = {
    node: SpecificImageNodeType;
};

type SpecificImageNodeType = {
    id: string;
    altText: string;
    originalSrc: string;
    transformedSrc: string;
};

type SpecificVariantType = {
    edges: SpecificVariantEdgeType[];
};

type SpecificVariantEdgeType = {
    node: SpecificVariantNodeType;
};

type SpecificVariantNodeType = {
    id: string;
    title: string;
    availableForSale: boolean;
    price: {
        amount: number;
    };
    compareAtPrice: {
        amount: number;
    };
    image: SpecificImageNodeType;
};

export type {
    SpecificProductType,
    SpecificImageType,
    SpecificImageEdgeType,
    SpecificImageNodeType,
    SpecificVariantType,
    SpecificVariantEdgeType,
    SpecificVariantNodeType
};
