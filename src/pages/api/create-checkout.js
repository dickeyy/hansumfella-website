import { sendShopifyStorefrontRequest } from "@/utils/shopify";

export default async function handler(req, res) {

    const { cartId } = req.query;

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
        },
    });

    res.status(200).json({
        data
    });

}   
  