import shopify, { sendShopifyStorefrontRequest } from "@/lib/shopify";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
    const { cartId, lineIds } = await request.json();

    try {
        const data = await sendShopifyStorefrontRequest({
            query: `
                    mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
                        cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
                            cart {
                                id
                            }
                            userErrors {
                                field
                                message
                            }
                        }
                    }
                `,
            variables: {
                cartId: cartId,
                lineIds: lineIds
            }
        });

        if (!data) {
            return NextResponse.json({ message: "Error removing from cart" }, { status: 500 });
        }

        return NextResponse.json({
            data
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error removing from cart" }, { status: 500 });
    }
}
