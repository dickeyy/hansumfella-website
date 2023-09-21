import { sendShopifyStorefrontRequest } from "@/utils/shopify";

export default async function handler(req:any, res:any) {

    const { cartId } = req.query;

    console.log(cartId);

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
  