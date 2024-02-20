import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import getProductById from "@/lib/get-product-by-id";
import { ProductType } from "@/types/product";
import { notFound } from "next/navigation";

async function getProduct(id: string) {
    const product: ProductType = await getProductById(id);
    return product;
}

export default async function Page({ params }: { params: { id: string } }) {
    const product: ProductType = await getProduct(params.id);
    if (!product) notFound();
    return (
        <main className="flex min-h-screen flex-col items-center px-24">
            <Navbar />
            <div className="flex w-full flex-1 flex-col items-center">{/* TODO */}</div>
            <Footer />
        </main>
    );
}
