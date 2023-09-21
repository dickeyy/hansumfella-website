import shopify from "@/utils/shopify";
import dotenv from 'dotenv';

// load environment variables
dotenv.config();

export default async function handler(req:any, res:any) {
    
    // create a session
    const session = shopify.session.customAppSession(process.env.SHOPIFY_STORE_NAME as string);

    const offline = shopify.auth.begin

    res.status(200).json({
        session
    });

}   
  