import { Inter } from "next/font/google";
import HomeHero from "@/comps/heroHome";
import Shop from "@/comps/shop";
import Navbar from "@/comps/navbar";
import getAllProducts from "@/lib/getAllProducts";
import SEOHead from "@/comps/seoHead";
import Footer from "@/comps/footer";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context: any) {
  const products = await getAllProducts();

  return {
    props: {
      products,
    },
  };
}

export default function Home({ products }: any) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-4 sm:px-10 ${inter.className}`}
      data-theme="synthwave"
    >
      <SEOHead />

      <Navbar />

      <HomeHero />

      <Shop products={products} />

      <Footer />
    </main>
  );
}
