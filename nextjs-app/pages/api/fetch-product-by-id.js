import { sendShopifyStorefrontRequest } from "@/utils/shopify";

export default async function handler(req, res) {

    const { productId } = req.query;

    let globalId = `gid://shopify/Product/${productId}`

    const data = await sendShopifyStorefrontRequest({
        query: `
            {
                product(id: "${globalId}") {
                    id
                    title
                    description
                    descriptionHtml
                    handle
                    totalInventory
                    images(first: 1) {
                        edges {
                            node {
                                id
                                altText
                                originalSrc
                                transformedSrc
                            }
                        }
                    }
                    totalInventory
                    variants(first: 1) {
                        edges {
                            node {
                                id
                                title
                                price {
                                    amount
                                }
                                compareAtPrice {
                                    amount
                                }
                                image {
                                    id
                                    altText
                                    originalSrc
                                    transformedSrc
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
        cartId: data
    });

}   
    