import { sendShopifyStorefrontRequest } from "@/lib/shopify";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    // Get the product id from the query string
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");

    let globalId = `gid://shopify/Product/${id}`;

    try {
        const data = await sendShopifyStorefrontRequest({
            query: `
            {
                product(id: "${globalId}") {
                    id
                    title
                    description
                    descriptionHtml
                    availableForSale
                    handle
                    totalInventory
                    images(first: 10) {
                        edges {
                            node {
                                id
                                altText
                                originalSrc
                                transformedSrc
                            }
                        }
                    }
                    totalInventory
                    variants(first: 100) {
                        edges {
                            node {
                                id
                                title
                                availableForSale
                                price {
                                    amount
                                }
                                compareAtPrice {
                                    amount
                                }
                                image {
                                    id
                                    altText
                                    originalSrc
                                    transformedSrc
                                }
                            }
                        }
                    }
                }

            }
        `,
            variables: {}
        });

        if (!data) {
            return NextResponse.json({ message: "Error fetching product data" }, { status: 500 });
        }

        const product = data.data.product;
        if (!product) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }

        return NextResponse.json(product);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error fetching product data" }, { status: 500 });
    }
}
