import { z } from "astro/zod";
import { config } from "./config";
import {
    ProductsQuery,
    ProductByHandleQuery,
    CreateCartMutation,
    AddCartLinesMutation,
    GetCartQuery,
    RemoveCartLinesMutation,
    ProductRecommendationsQuery
} from "./graphql";
import { ProductResult } from "./schema";

// Make a request to Shopify's GraphQL API  and return the data object from the response body as JSON data.
const makeShopifyRequest = async (
    query: string,
    variables: Record<string, unknown> = {},
    buyerIP: string = ""
) => {
    const isSSR = import.meta.env.SSR;
    const apiUrl = `https://${config.shopify.shop}/api/${config.shopify.apiVersion}/graphql.json`;

    function getOptions() {
        const privateShopifyAccessToken = config.shopify.adminAccessToken;
        const publicShopifyAccessToken = config.shopify.accessToken;
        const options = {
            method: "POST",
            headers: {},
            body: JSON.stringify({ query, variables })
        };
        // Check if the Shopify request is made from the server or the client
        if (isSSR) {
            options.headers = {
                "Content-Type": "application/json",
                "Shopify-Storefront-Private-Token": privateShopifyAccessToken,
                "Shopify-Storefront-Buyer-IP": buyerIP
            };
            return options;
        }
        options.headers = {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": publicShopifyAccessToken
        };

        return options;
    }

    const response = await fetch(apiUrl, getOptions());

    if (!response.ok) {
        const body = await response.text();
        throw new Error(`${response.status} ${body}`);
    }

    const json = await response.json();
    if (json.errors) {
        throw new Error(json.errors.map((e: Error) => e.message).join("\n"));
    }

    return json.data;
};

// Get all products or a limited number of products (default: 10)
export const getAllProducts = async (options: { limit?: number; buyerIP: string }) => {
    const { limit = 10, buyerIP } = options;

    const data = await makeShopifyRequest(ProductsQuery, { first: limit }, buyerIP);
    const { products } = data;

    if (!products) {
        throw new Error("No products found");
    }

    const productsList = products.edges.map((edge: any) => edge.node);
    const ProductsResult = z.array(ProductResult);
    const parsedProducts = ProductsResult.parse(productsList);

    return parsedProducts;
};

// Get a single product by handle
export const getProductByHandle = async (handle: string, buyerIP: string = "") => {
    const data = await makeShopifyRequest(ProductByHandleQuery, { handle, buyerIP });
    const { product } = data;

    if (!product) {
        throw new Error("No product found");
    }

    const productResult = ProductResult.parse(product);

    return productResult;
};
