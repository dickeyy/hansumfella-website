import Footer from "@/components/footer";
import ImageCarousel from "@/components/image-carousel";
import Navbar from "@/components/navbar";
import ProductInfoCard from "@/components/product-info-card";
import { Skeleton } from "@/components/ui/skeleton";
import getProductById from "@/lib/get-product-by-id";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

async function getProduct(id: string) {
    const product = await getProductById(id);
    return product;
}

export async function generateMetadata(
    { params }: { params: { id: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.id;
    const product = await getProduct(id);
    if (!product) notFound();

    return {
        metadataBase: (await parent).metadataBase,
        title: product.title,
        description: product.description,
        keywords: (await parent).keywords,
        openGraph: {
            siteName: "Hansumfella Merch",
            type: "website",
            locale: "en_US",
            url: (await parent).openGraph?.url ?? "",
            title: product.title,
            description: product.description,
            images: [
                {
                    url: product.images.edges[0].node.originalSrc,
                    alt: product.title
                }
            ]
        }
    };
}

export default async function Page({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id);
    if (!product) notFound();

    return (
        <main className="flex min-h-screen flex-col items-center px-4 sm:px-24">
            <Navbar />
            <div className="mt-12 flex w-full flex-1 flex-col items-start justify-center gap-2 sm:mt-24 sm:flex-row">
                <div className="flex w-full flex-col items-start justify-center gap-2 sm:flex-row sm:gap-4">
                    <div className="flex w-full flex-col items-center justify-center sm:w-1/2">
                        <Suspense fallback={<Skeleton className="h-12 w-12"></Skeleton>}>
                            <ImageCarousel images={product.images} />
                        </Suspense>
                    </div>

                    <div className="flex w-full flex-col items-center justify-center sm:w-1/2">
                        <Suspense fallback={<Skeleton className="h-12 w-12"></Skeleton>}>
                            <ProductInfoCard product={product} />
                        </Suspense>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
