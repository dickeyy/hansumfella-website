import AddToCartButton from "@/comps/addToCartButton"
import Footer from "@/comps/footer"
import Navbar from "@/comps/navbar"
import ProductPictures from "@/comps/productPictures"
import QuantitySelector from "@/comps/quantitySelector"
import SEOHead from "@/comps/seoHead"
import Toast from "@/comps/toast"
import VariantSelector from "@/comps/variantSelector"
import getProductById from "@/lib/getProductById"
import { Inter } from "next/font/google"
import { useEffect, useState } from "react"

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps(context:any) {
	// get the id from the url
    const id = context.params.id

    // fetch the product
    const product = await getProductById(id)

    if (product.cartId.data.product == null) {
        // go to 404 page
        return {
            redirect: {
                destination: '/404',
                permanent: false
            }
        }
    }

    // return the product as props
    return {
        props: {
            product: product.cartId.data.product
        }
    }
}

export default function Page(props:any) {

    useEffect(() => {
        if (typeof window === 'undefined') return

        if (props.redirect) {
            // redirect to 404 page
            window.location.href = '/404'
        }
    })

    const [currentPicture, setCurrentPicture] = useState(props.product?.images?.edges[0]?.node?.originalSrc)
    const [quantity, setQuantity] = useState(1)
    const [variant, setVariant] = useState(props.product.variants.edges[0].node)
    const [variantCount, setVariantCount] = useState(props.product.variants.edges.length)

    const [showToast, setShowToast] = useState(false)
    const [toastTitle, setToastTitle] = useState('')
    const [toastType, setToastType] = useState('success')

    return (
        <main
			className={`flex min-h-screen flex-col items-center justify-between px-4 ${inter.className}`}
			data-theme="synthwave"
		>
            <SEOHead 
                title={props.product.title}
                description={props.product.description}
                image={props.product.images.edges[0].node.originalSrc}
            />

            <Navbar />

            <div className="grid sm:grid-cols-2 grid-cols-1 mt-16 gap-8 sm:px-24 px-2  justify-center">
                
                <div className="col-span-1 row-span-2">
                    <img src={currentPicture} className="w-full rounded-lg mb-6 static" />
                    <ProductPictures pictures={props.product.images.edges} setCurrentPicture={setCurrentPicture} />
                </div>

                <div className="col-span-1 w-full">

                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold">{props.product.title}</h1>
                        <h1 className="text-2xl font-medium text-primary mt-4">${props.product.variants.edges[0].node.price.amount}</h1>
                    </div>

                    <div className="flex flex-col mt-8 w-full">
                        <h1 className="text-xl font-normal mb-2 text-zinc-400">Quantity</h1>
                        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                    </div>

                    <div className="flex flex-col mt-8 w-full glassEffect p-4 rounded-lg text-lg font-normal mb-2 text-zinc-300"
                        dangerouslySetInnerHTML={{ __html: props.product.descriptionHtml }}
                    >
                    </div>

                    {variantCount > 1 ? (
                        <div className="flex flex-col mt-8 w-full">
                            <VariantSelector variants={props.product.variants.edges} setVariant={setVariant} variant={variant} />
                        </div>
                    ) : (
                        null
                    )}

                    <div className="flex flex-col mt-8 w-full">
                        <AddToCartButton product={props.product} quantity={quantity} variant={variant} disabled={variantCount > 1 && variant == null || quantity < 1 || quantity > 99}
                        setShowToast={setShowToast} setToastTitle={setToastTitle} setToastType={setToastType}
                        />

                    </div>

                </div>

            </div>

            <Footer />
            
            {/* if show toast, show toast */}
            {showToast ? (
                <Toast title={toastTitle} type={toastType} duration={5000} id='1' />
            ) : (
                null
            )}
           
        </main>

    )

}