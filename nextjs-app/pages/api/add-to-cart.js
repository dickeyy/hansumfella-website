import { sendShopifyStorefrontRequest } from "@/utils/shopify";

export default async function handler(req, res) {

    const { cartId, lines } = JSON.parse(req.body)

    const data = await sendShopifyStorefrontRequest({
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
        },
    });

    console.log(data.data.cartLinesAdd.cart.lines.edges[0].node.merchandise)

    res.status(200).json({
        data
    });

}   
  