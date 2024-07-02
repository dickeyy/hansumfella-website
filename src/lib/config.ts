import { LATEST_API_VERSION } from "@shopify/shopify-api";

export const config = {
    shopify: {
        shop: import.meta.env.SHOPIFY_STORE_NAME,
        apiKey: import.meta.env.SHOPIFY_API_KEY,
        secret: import.meta.env.SHOPIFY_API_SECRET,
        accessToken: import.meta.env.SHOPIFY_ACCESS_TOKEN,
        adminAccessToken: import.meta.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
        apiVersion: LATEST_API_VERSION
    }
};
