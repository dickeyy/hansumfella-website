import '@shopify/shopify-api/adapters/node';
import {shopifyApi, LATEST_API_VERSION} from '@shopify/shopify-api';
import { restResources } from "@shopify/shopify-api/rest/admin/2023-01";
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



export default shopify;