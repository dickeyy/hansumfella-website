import Navbar from "@/comps/navbar"
import SEOHead from "@/comps/seoHead"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
    return (
        <main
			className={`flex min-h-screen flex-col items-center justify-center px-4 ${inter.className}`}
			data-theme="synthwave"
		>
            <SEOHead title="404" />
            <Navbar />
            <img src="/images/hansum-maid.jpg" className="w-96 rounded-lg" />
            <h1 className="text-2xl font-bold mt-5">We couldn't find that page...</h1>
            <p className="text-lg font-normal text-zinc-300">So heres a picture of fella</p>
            <a href="/" className="btn btn-primary sm:w-1/2 w-full mt-5">Go Home</a>

        </main>

    )
}