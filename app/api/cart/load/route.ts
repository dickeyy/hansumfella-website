import shopify, { sendShopifyStorefrontRequest } from "@/lib/shopify";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
    const { cartId } = await request.json();

    try {
        const data = await sendShopifyStorefrontRequest({
            query: `
            query {
                cart(
                    id: "${cartId}"
                ) {
                    id
                    createdAt
                    updatedAt
                    lines(first: 10) {
                        edges {
                            node {
                                id
                                quantity
                                merchandise {
                                    ... on ProductVariant {
                                        id
                                        title
                                        product {
                                            title
                                            images(first: 1) {
                                                edges {
                                                    node {
                                                        originalSrc
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                attributes {
                                    key
                                    value
                                }
                            }
                        }
                    }
                    attributes {
                        key
                        value
                    }
                    cost {
                        totalAmount {
                            amount
                            currencyCode
                        }
                        subtotalAmount {
                            amount
                            currencyCode
                        }
                        totalTaxAmount {
                            amount
                            currencyCode
                        }
                        totalDutyAmount {
                            amount
                            currencyCode
                        }
                    }
                    buyerIdentity {
                        email
                        phone
                        customer {
                            id
                        }
                        countryCode
                        deliveryAddressPreferences {
                            ... on MailingAddress {
                                address1
                                address2
                                city
                                provinceCode
                                countryCodeV2
                                zip
                            }
                        }
                    }
                }
            }
        `,
            variables: {
                cartId
            }
        });

        if (!data) {
            return NextResponse.json({ message: "Error loading cart" }, { status: 500 });
        }

        return NextResponse.json({
            cartId: data
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error loading cart" }, { status: 500 });
    }
}
