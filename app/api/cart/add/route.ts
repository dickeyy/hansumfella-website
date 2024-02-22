import shopify, { sendShopifyStorefrontRequest } from "@/lib/shopify";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: NextResponse) {
    const { lines, cartId } = await request.json();

    try {
        const data: any = await sendShopifyStorefrontRequest({
            query: `
            mutation cartLinesAdd($lines: [CartLineInput!]!) {
                cartLinesAdd(
                    cartId: "${cartId}"
                    lines: $lines
                ) {
                    cart {
                        id
                        createdAt
                        updatedAt
                        
                        lines(first: 100) {
                            edges {
                                node {
                                    id
                                    merchandise {
                                        ... on ProductVariant {
                                            id
                                            title
                                            product {
                                                title
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

        `,
            variables: {
                lines
            }
        });

        if (!data) {
            return NextResponse.json({ message: "Error adding to cart" }, { status: 500 });
        }

        return NextResponse.json({
            data: data
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error adding to cart" }, { status: 500 });
    }
}
