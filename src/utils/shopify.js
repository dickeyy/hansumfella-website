import '@shopify/shopify-api/adapters/node';
import {shopifyApi, LATEST_API_VERSION} from '@shopify/shopify-api';
import { restResources } from "@shopify/shopify-api/rest/admin/2023-01";
import fetch from 'node-fetch'

import dotenv from 'dotenv';

// load environment variables
dotenv.config();

const shopify = shopifyApi({
    apiKey: process.env.SHOPIFY_API_KEY,
    apiSecretKey: process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
    apiVersion: LATEST_API_VERSION,
    isEmbeddedApp: false,
    isCustomStoreApp: true,
    scopes: [],
    hostName: process.env.SHOPIFY_STORE_NAME,
    // Mount REST resources
    restResources
});

export async function sendShopifyStorefrontRequest({query, variables}) {
    const result = await fetch(
        `https://${process.env.SHOPIFY_STORE_NAME}/api/2023-04/graphql.json`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_API_ACCESS_TOKEN
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