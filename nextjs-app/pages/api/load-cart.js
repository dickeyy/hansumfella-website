import { sendShopifyStorefrontRequest } from "@/utils/shopify";

export default async function handler(req, res) {

    const { cartId } = req.query;

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
            cartId,
        },
    });

    res.status(200).json({
        data
    });

}       
  