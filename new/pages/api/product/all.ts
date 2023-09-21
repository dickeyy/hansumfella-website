import shopify from "@/utils/shopify";
import dotenv from 'dotenv';

// load environment variables
dotenv.config();

export default async function handler(req:any, res:any) {
    
    const session = shopify.session.customAppSession('hansumfellas-shop.myshopify.com')

    const products = await shopify.rest.Product.all({session});

    res.status(200).json({
        products
    });

}
  