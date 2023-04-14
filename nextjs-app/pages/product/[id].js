import Head from 'next/head'
import theme from '@/styles/theme'
import { Box, Heading, Text } from '@chakra-ui/layout'
import { ChakraProvider, useToast, Grid, GridItem, Image, Spinner, useNumberInput, Button, Input, HStack, IconButton } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useRouter } from 'next/router'

// Components
import NavBar from '@/comps/navbar'
import { FaMinus, FaPlus, FaShare, FaShoppingCart } from 'react-icons/fa'
import Footer from '@/comps/footer'
import AddToCartButton from '@/comps/addToCartButton'

export default function Home() {


	const toast = useToast()

	const [product, setProduct] = React.useState(null)
	const router = useRouter()
    const { id } = router.query

	const [ inStock, setInstock ] = React.useState(true)
    const [ stockColor, setStockColor ] = React.useState('green.200')

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

	React.useEffect(() => {
		setTimeout(() => {
			if (!id) return
			axios.get(`/api/fetch-product-by-id?id=${id}`)
			.then((res) => {
				console.log(res.data.product)
				setProduct(res.data.product)
			})
			.catch((err) => {
				console.log(err)
			})
		}, 1000)

		if (!product) return
			if (product.variants[0].inventory_quantity <= 0) {
				setInstock(false)
				setStockColor('red.200')
			} else if (product.variants[0].inventory_quantity <= 5) {
				setStockColor('orange.200')
			}
	}, [])

  return (
    <ChakraProvider theme={theme}>
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
			<meta property="og:image" content="https://hansumfella.com/images/hansum-circle.png" />

			{/* <!-- Twitter Meta Tags --> */}
			<meta name="twitter:card" content="summary_small_image" />
			<meta property="twitter:domain" content="hansumfella.com" />
			<meta property="twitter:url" content="https://hansumfella.com" />
			<meta name="twitter:title" content="hansumfella" />
			<meta name="twitter:description" content="he's so hansum" />
			<meta name="twitter:image" content="https://hansumfella.com/images/hansum-circle.png" />
		</Head>

		<Box 
			w="100vw"
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
		>
			
			<NavBar active={"Home"} />

			{!product ? (
				<Spinner />
			) : (

				<Box
					w="100vw"
					display="flex"
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
				>

					<Box
						w="100vw"
						display="flex"
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
						mt="10vh"
						p={'5'}
					>
						<Grid
							templateColumns={{ base: "repeat(1,1fr", md: "repeat(5, 1fr)"}}
							templateRows={{ base: "repeat(2, 1fr)", md: "repeat(1, 1fr)" }}
							w={{ base: "100%", md: "80%" }}
						>
							<GridItem colSpan={3}
								rowSpan={2}
								// center the image
								display="flex"
								justifyContent="center"
								alignItems="center"

							>
								<Image
									src={product.images[0].src}
									alt={product.title}
									w="90%"
									preserveAspectRatio="xMidYMid slice"
									objectFit="cover"
									borderRadius='8px'
								/>
							</GridItem>
							<GridItem colSpan={['3','3','2','2']}>
								<Box
									display="flex"
									textAlign={['center', 'center', 'left', 'left']}
									flexDirection="column"
								>
									<Text
										mt={['1rem', '1rem', '0', '0']}
										fontSize={['3xl', '4xl', '4xl', '5xl']}
										fontWeight="bold"
										color="brand.alt.pink.200"
										mb="1rem"
									>
										{product.title}
									</Text>

									

									<Heading
										fontSize="2xl"
										fontWeight="bold"
										color="brand.gray.100"
										mb="1rem"
									>
										${product.variants[0].price} USD
									</Heading>

									<Text 
										fontSize="xl"
										fontWeight="normal"
										color="brand.gray.100"
										mb="0.5rem"
									>
										Quantity
									</Text>
									<HStack spacing="24px" mb="1rem"
									>
										<IconButton p={'0.5rem'} as={FaPlus} {...inc}></IconButton>
										<Input fontSize={'2xl'} fontWeight={'bold'} w={['100%', '100%', '20%', '20%']} textAlign={'center'} {...input} />
										<IconButton p={'0.5rem'} as={FaMinus} {...dec}></IconButton>
									</HStack>

									<br />

									<Box 
										dangerouslySetInnerHTML={{ __html: product.body_html }}
										fontSize="lg"
										fontWeight="normal"
										color="white"
										mb="1rem"
										borderRadius={'8px'}
										p={'1rem'}
										bgColor={'#262736'}
									/>

									<Text
										fontSize="xl"
										fontWeight="bold"
										color="brand.alt.pink"
										textAlign="center"
									>
										{product.category}
									</Text>

									<Text
										fontSize="xl"
										fontWeight="normal"
										color={stockColor}
										mb="1rem"
									>
										{product.variants[0].inventory_quantity.toLocaleString()} left in stock
									</Text>

									<AddToCartButton
										colorScheme="brand.alt.pink"
										size="lg"
										fontSize="xl"
										fontWeight="bold"
										w="100%"
										p={'2rem'}
										mb="1rem"
										quantity={input}
										varientId={product.variants[0].admin_graphql_api_id}
										isDisabled={product.variants[0].inventory_quantity <= 0}
									/>

									<Button
										colorScheme="brand.alt.pink"
										size="lg"
										fontSize="xl"
										fontWeight="bold"
										variant={'outline'}
										w="100%"
										p={'2rem'}
										mb="1rem"
										leftIcon={<FaShare />}

										onClick={() => {
											// copy the url to the clipboard
											navigator.clipboard.writeText(window.location.href)
											// show the user that the url was copied
											toast({
												title: "Link Copied",
												status: "success",
												duration: 5000,
												isClosable: true,
											})
										}}
									>
										Share
									</Button>
								</Box>
							</GridItem>
						</Grid>

					</Box>

					<Box h='10vh' />

					<Footer />

				</Box>
			)}

		</Box>

    </ChakraProvider>
  )
}
