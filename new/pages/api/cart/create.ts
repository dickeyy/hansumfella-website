import { sendShopifyStorefrontRequest } from "@/utils/shopify";

export default async function handler(req:any, res:any) {

    const data:any = await sendShopifyStorefrontRequest({
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
        variables: {},
    });

    if (!data) {
        res.status(500).json({
            'message': 'Error creating cart'
        });
        return
    }

    res.status(200).json({
        cartId: data.data.cartCreate?.cart?.id,
    });

}   
    