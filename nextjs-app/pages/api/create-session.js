import shopify from "@/utils/shopify";
import dotenv from 'dotenv';

// load environment variables
dotenv.config();

export default async function handler(req, res) {
    
    // create a session
    const session = shopify.session.customAppSession(process.env.SHOPIFY_STORE_NAME);

    const offline = shopify.auth.begin

    res.status(200).json({
        session
    });

}   
  