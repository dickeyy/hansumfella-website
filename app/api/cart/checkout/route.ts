import shopify, { sendShopifyStorefrontRequest } from "@/lib/shopify";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
    const { cartId } = await request.json();

    try {
        const data = await sendShopifyStorefrontRequest({
            query: `
            query checkoutURL($cartId: ID!) {
                cart(
                    id: $cartId
                ) {
                    checkoutUrl
                }
            }
        `,
            variables: {
                cartId
            }
        });

        if (!data) {
            return NextResponse.json({ message: "Error creating checkout" }, { status: 500 });
        }

        return NextResponse.json({
            data
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error creating checkout" }, { status: 500 });
    }
}
