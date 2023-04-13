import shopify from "@/utils/shopify";
import dotenv from 'dotenv';

// load environment variables
dotenv.config();

export default async function handler(req, res) {
    
    const session = shopify.session.customAppSession(process.env.SHOPIFY_STORE_NAME);

    const product = await shopify.rest.Product.find({
        session,
        id: req.query.id
    })

    res.status(200).json({
        product
    });

}
  