import '@shopify/shopify-api/adapters/node';
import {ApiVersion, shopifyApi} from '@shopify/shopify-api';
import { restResources } from "@shopify/shopify-api/rest/admin/2023-01";
import fetch from 'node-fetch'

import dotenv from 'dotenv';

// load environment variables
dotenv.config();

const shopify = shopifyApi({
    apiKey: process.env.SHOPIFY_API_KEY,
    apiSecretKey: process.env.SHOPIFY_API_SECRET as string,
    adminApiAccessToken: process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN as string,
    apiVersion: ApiVersion.July23,
    isEmbeddedApp: false,
    isCustomStoreApp: true,
    scopes: [],
    hostName: process.env.SHOPIFY_STORE_NAME as string,
    // Mount REST resources
    restResources
});

export async function sendShopifyStorefrontRequest({query, variables}: any) {
    const result = await fetch(
        `https://${process.env.SHOPIFY_STORE_NAME}/api/2023-07/graphql.json`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN as string
            },
            body: JSON.stringify({ query, variables })
        }
    );

    if (!result.ok) {
        console.error(result)
        return false
    }

    const data = await result.json();

    return data;
}

// export shopify
export default shopify;