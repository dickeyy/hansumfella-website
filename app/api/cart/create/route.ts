import shopify, { sendShopifyStorefrontRequest } from "@/lib/shopify";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request, response: NextResponse) {
    try {
        const data: any = await sendShopifyStorefrontRequest({
            query: `
            mutation {
                cartCreate(
                    input: {}
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
                                        }
                                    }
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
            return NextResponse.json({ message: "Error creating cart" }, { status: 500 });
        }

        return NextResponse.json({
            cartId: data.data.cartCreate?.cart?.id
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error creating cart" }, { status: 500 });
    }
}
