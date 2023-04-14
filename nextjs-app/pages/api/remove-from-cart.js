import { sendShopifyStorefrontRequest } from "@/utils/shopify";

export default async function handler(req, res) {

    const { cartId, lineIds } = JSON.parse(req.body);

    console.log('cartId', cartId);
    console.log('linesIds', lineIds);

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
        },
    });

    res.status(200).json({
        data
    });

}   
  