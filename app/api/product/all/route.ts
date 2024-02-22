import shopify from "@/lib/shopify";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: NextResponse) {
    try {
        const session = shopify.session.customAppSession("hansumfellas-shop.myshopify.com");

        const products = await shopify.rest.Product.all({ session });

        // filter out the products that are not published
        products.data = products.data.filter((product: any) => product.status === "active");

        return NextResponse.json(products);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error fetching products" }, { status: 500 });
    }
}
