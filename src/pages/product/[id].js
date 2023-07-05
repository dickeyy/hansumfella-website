import Head from 'next/head'
import theme from '@/styles/theme'
import { Box, Heading, Text } from '@chakra-ui/layout'
import { ChakraProvider, useToast, Grid, GridItem, Image, Spinner, useNumberInput, Button, Input, HStack, IconButton } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router'
import { FaMinus, FaPlus, FaShare } from 'react-icons/fa'

// Components
import NavBar from '@/comps/navbar'
import Footer from '@/comps/footer'
import AddToCartButton from '@/comps/addToCartButton'
import SizeSelectorBig from '@/comps/sizeSelectorBig'
import ImageSelector from '@/comps/imageSelector'

export default function Home(props) {

	const toast = useToast()

	const [product, setProduct] = React.useState(null)
	const router = useRouter()

	const [ inStock, setInstock ] = React.useState(true)
    const [ stockColor, setStockColor ] = React.useState('green.200')
	const [ selectedSize, setSelectedSize ] = React.useState(null)
	const [ selectedVariant, setSelectedVariant ] = React.useState(null)
	const [ selectedImage, setSelectedImage ] = React.useState(product?.images.edges[0].node.originalSrc)
	
	const [ isLoading, setIsLoading ] = React.useState(true)

	const { id } = router.query

	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 20,
      precision: 0,
    })

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

	const onSizeSelected = (size) => {
        setSelectedSize(size)
        // find the variant id that matches the selected size
        product.variants.edges.forEach(variant => {
            if (variant.node.title === size) {
                setSelectedVariant(variant.node.id)
            }
        })
    }

	const onImageSelected = (image) => {
		setSelectedImage(image.node.originalSrc)
	}

	console.log(product)
	React.useEffect(() => {

		console.log(router.query)

		setTimeout(async () => {

			if (id != undefined) {

				console.log('fetching product')

				const request = await fetch(`/api/fetch-product-by-id?productId=${id}`).then((res) => res.json())

				if (request.cartId.data.product == null) {
					// redirect to 404
					router.push('/404')
				} else {
					setProduct(request.cartId.data.product)
					setSelectedVariant(request.cartId.data.product.variants.edges[0].node.id)
					setSelectedImage(request.cartId.data.product.images.edges[0].node.originalSrc)
					setIsLoading(false)
				}
			}
		}, 2000)

		if (!product) return
			if (product.totalInventory <= 0) {
				setInstock(false)
				setStockColor('red.200')
			} else if (product.totalInventory <= 5) {
				setStockColor('orange.200')
			}
	}, [id])

  return (

	<main
		className={`flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-bg`}
	>	
		<NavBar active={"Home"} />

		<Head>
			<title>{product?.title}</title>
			<meta name="description" content="he's so hansum" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="https://hansumfella.com/images/hansum-circle.png" />

			{/* //   <!-- Facebook Meta Tags --> */}
			<meta property="og:url" content="https://hansumfella.com" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="hansumfella" />
			<meta property="og:description" content="he's so hansum" />
			<meta property="og:image" content={selectedImage} />

			{/* <!-- Twitter Meta Tags --> */}
			<meta name="twitter:card" content="summary_small_image" />
			<meta property="twitter:domain" content="hansumfella.com" />
			<meta property="twitter:url" content="https://hansumfella.com" />
			<meta name="twitter:title" content="hansumfella" />
			<meta name="twitter:description" content="he's so hansum" />
			<meta name="twitter:image" content={selectedImage} />
		</Head>

		<div className="min-h-screen justify-center items-center text-center">
			<div className="justify-center items-center text-center h-screen">
				
				{isLoading ? (
					<div role="status">
						<svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-700 animate-spin fill-pink-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
							<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
						</svg>
						<span class="sr-only">Loading...</span>
					</div>
				) : (

					<div className="mt-[10vh] grid grid-flow-col grid-cols-2 gap-2 w-[80vw] justify-center items-center text-center h-screen">
						
						<div className='col-span-1 flex flex-col items-center justify-center'>
							<img src={selectedImage} className=" rounded-lg shadow-2xl w-[90%] object-cover aspect-square" />
							<div className="w-[90%] flex flex-col justify-between items-center mt-5">
								<ImageSelector images={product.images.edges} onImageSelected={onImageSelected} />
							</div>
						</div>

						<div className='col-span-1 flex flex-col sm:text-left text-center'>

							<h1 className="sm:mt-5 mt-0 sm:text-6xl text-3xl font-bold text-pink-200 mb-5">
								{product.title}
							</h1>

							<p className="sm:text-3xl text-xl font-bold text-zinc-400 mb-5">
								${product.variants.edges[0].node.price.amount} USD
							</p>

							<p className="sm:text-xl text-lg font-normal text-zinc-400 mb-2">
								Quantity
							</p>
							<div className="flex flex-row justify-between w-1/2">
								<button className='btn btn-neutral' {...inc}>
									<FaPlus className='text-white text-lg' />
								</button>

								<input className='w-2/3 text-center bg-transparent border border-1 rounded-lg text-xl font-bold' type='number' {...input} />

								<button className='btn btn-neutral' {...dec}>
									<FaMinus className='text-white text-lg' />
								</button>
							</div>

							{product.totalInventory <= 50 ? (
								<p className='text-xl font-normal text-red-500 mt-5'>
									Only {product.totalInventory.toLocaleString()} left in stock!
								</p>
							) : ( null )}

							<div className="text-lg font-normal text-white rounded-lg bg-white/10 p-4 mt-8" 
								dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
							/>

							<p className='text-xl font-normal text-zinc-400 mt-5 mb-2'>
								Size
							</p>
							<SizeSelectorBig variants={product.variants.edges} onSizeSelected={onSizeSelected} />

							<AddToCartButton
								colorScheme='brand.alt.pink'
								size="lg"
								fontSize="xl"
								fontWeight="bold"
								w="100%"
								p="2rem"
								mb="1rem"
								mt="1rem"
								quantity={input}
								variantId={selectedVariant}
								isDisabled={product.totalInventory <= 0}
								productTitle={product.title}
							/>

						</div>
					</div>

				)}

			</div>
		</div>

	</main>

    // <ChakraProvider theme={theme}>

	// 	<Box 
	// 		w="100vw"
	// 		display="flex"
	// 		justifyContent="center"
	// 		alignItems="center"
	// 		flexDirection="column"
	// 	>
			
	// 		<NavBar active={"Home"} />

	// 		{isLoading ? (
	// 			<Box h={'100vh'}
	// 				w="100vw"
	// 				display="flex"
	// 				justifyContent="center"
	// 				alignItems="center"
	// 				flexDirection="column"
	// 			>
	// 				<Spinner />
	// 			</Box>
	// 		) : (

	// 			<Box
	// 				w="100vw"
	// 				display="flex"
	// 				justifyContent="center"
	// 				alignItems="center"
	// 				flexDirection="column"
	// 			>

	// 				<Box
	// 					w="100vw"
	// 					display="flex"
	// 					justifyContent="center"
	// 					alignItems="center"
	// 					flexDirection="column"
	// 					mt="10vh"
	// 					p={'5'}
	// 				>
	// 					<Grid
	// 						templateColumns={{ base: "repeat(1,1fr", md: "repeat(5, 1fr)"}}
	// 						templateRows={{ base: "repeat(2, 1fr)", md: "repeat(1, 1fr)" }}
	// 						w={{ base: "100%", md: "80%" }}
	// 					>
	// 						<GridItem colSpan={3}
	// 							rowSpan={2}
	// 							// center the image
	// 							display="flex"
	// 							justifyContent="center"
	// 							alignItems="center"
	// 							flexDir={'column'}
	// 						>
	// 							<Image
	// 								src={selectedImage}
	// 								alt={product.title}
	// 								w="90%"
	// 								preserveAspectRatio="xMidYMid slice"
	// 								objectFit="cover"
	// 								borderRadius='8px'
	// 							/>

	// 							<Box
	// 								display="flex"
	// 								justifyContent="center"
	// 								alignItems="center"
	// 								flexDir={'column'}
	// 								w="90%"
	// 								mt={'1rem'}
	// 							>
	// 								<ImageSelector images={product.images.edges} onImageSelected={onImageSelected} />
	// 							</Box>
								
	// 						</GridItem>
	// 						<GridItem colSpan={['3','3','2','2']}>
	// 							<Box
	// 								display="flex"
	// 								textAlign={['center', 'center', 'left', 'left']}
	// 								flexDirection="column"
	// 							>
	// 								<Text
	// 									mt={['1rem', '1rem', '0', '0']}
	// 									fontSize={['3xl', '4xl', '4xl', '5xl']}
	// 									fontWeight="bold"
	// 									color="brand.alt.pink.200"
	// 									mb="1rem"
	// 								>
	// 									{product.title}
	// 								</Text>

									

	// 								<Heading
	// 									fontSize="2xl"
	// 									fontWeight="bold"
	// 									color="brand.gray.100"
	// 									mb="1rem"
	// 								>
	// 									${product.variants.edges[0].node.price.amount} USD
	// 								</Heading>

	// 								<Text 
	// 									fontSize="xl"
	// 									fontWeight="normal"
	// 									color="brand.gray.100"
	// 									mb="0.5rem"
	// 								>
	// 									Quantity
	// 								</Text>
	// 								<HStack spacing="24px" mb="1rem"
	// 								>
	// 									<IconButton p={'0.5rem'} as={FaPlus} {...inc}></IconButton>
	// 									<Input fontSize={'2xl'} fontWeight={'bold'} w={['100%', '100%', '20%', '20%']} textAlign={'center'} {...input} />
	// 									<IconButton p={'0.5rem'} as={FaMinus} {...dec}></IconButton>
	// 								</HStack>

	// 								<br />

	// 								<Box 
	// 									dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
	// 									fontSize="lg"
	// 									fontWeight="normal"
	// 									color="white"
	// 									mb="1rem"
	// 									borderRadius={'8px'}
	// 									p={'1rem'}
	// 									bgColor={'#262736'}
	// 								/>
	// 								<Text 
	// 									fontSize="xl"
	// 									fontWeight="normal"
	// 									color="brand.gray.100"
	// 									mb="0.5rem"
	// 								>
	// 									Size
	// 								</Text>
	// 								<SizeSelectorBig variants={product.variants.edges} onSizeSelected={onSizeSelected} />

	// 								<Text
	// 									fontSize="xl"
	// 									fontWeight="bold"
	// 									color="brand.alt.pink"
	// 									textAlign="center"
	// 								>
	// 									{product.category}
	// 								</Text>
									
	// 								{product.totalInventory <= 50 ? (
	// 									<Text
	// 										fontSize="xl"
	// 										fontWeight="normal"
	// 										color={stockColor}
	// 										mt={'0.5rem'}
	// 										mb="1rem"
	// 									>
	// 										{product.totalInventory.toLocaleString()} left in stock
	// 									</Text>
	// 								) : null}

	// 								<AddToCartButton
	// 									colorScheme="brand.alt.pink"
	// 									size="lg"
	// 									fontSize="xl"
	// 									fontWeight="bold"
	// 									w="100%"
	// 									p={'2rem'}
	// 									mb="1rem"
	// 									mt="1rem"
	// 									quantity={input}
	// 									varientId={selectedVariant}
	// 									isDisabled={product.totalInventory <= 0}
	// 									productTitle={product.title}
	// 								/>

	// 								<Button
	// 									colorScheme="brand.alt.pink"
	// 									size="lg"
	// 									fontSize="xl"
	// 									fontWeight="bold"
	// 									variant={'outline'}
	// 									w="100%"
	// 									p={'2rem'}
	// 									mb="1rem"
	// 									leftIcon={<FaShare />}

	// 									onClick={() => {
	// 										// copy the url to the clipboard
	// 										navigator.clipboard.writeText(window.location.href)
	// 										// show the user that the url was copied
	// 										toast({
	// 											title: "Link Copied",
	// 											status: "success",
	// 											duration: 5000,
	// 											isClosable: true,
	// 										})
	// 									}}
	// 								>
	// 									Share
	// 								</Button>
	// 							</Box>
	// 						</GridItem>
	// 					</Grid>

	// 				</Box>

	// 				<Box h='10vh' />

	// 				<Footer />

	// 			</Box>
	// 		)}

	// 	</Box>

    // </ChakraProvider>
  )
}
