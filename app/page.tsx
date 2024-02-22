import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ProductList from "@/components/product-list";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center px-4 md:px-12 lg:px-24">
            {/* <Navbar active="shop" />
            <Hero />
            <ProductList /> */}
            <Footer />
        </main>
    );
}
