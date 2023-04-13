import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/provider'
import theme from '@/styles/theme'
import { Box, Heading, Text, VStack } from '@chakra-ui/layout'
import { useColorMode, useColorModeValue, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'

// Components
import NavBar from '@/comps/navbar'
import Product from '@/comps/product'
import Hero from '@/comps/homeHero'
import Footer from '@/comps/footer'

export default function Home() {

	const { toggleColorMode } = useColorMode();
  	const text = useColorModeValue('dark', 'light');
	const toast = useToast()

	const [products, setProducts] = React.useState([])

	React.useEffect(() => {
		axios.get('/api/fetch-products')
			.then((res) => {

				let tempArray = []

				res.data.products.data.forEach(item => {
					if (item.status == 'active') {
						tempArray.push(item)
					}
				});

				setProducts(tempArray)
			}).catch((err) => {
				toast({
					title: "Error",
					description: "Something went wrong, please refresh the page and try again.",
					status: "error",
					duration: 4000,
					isClosable: true,
				})
			})


		setTimeout(() => {
			if (text === 'dark') {
				// set the color mode to dark
				toggleColorMode()
			}
		}, 2000)

		setTimeout(() => {
			if (text === 'dark') {
				// set the color mode to dark
				toggleColorMode()
			}
		}, 10000)
	}, [])
	

  return (
    <ChakraProvider theme={theme}>
		<Head>
			<title>hansumfella | Home</title>
			<meta name="description" content="he's so hansum" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="images/hansum-circle.png" />

			{/* //   <!-- Facebook Meta Tags --> */}
			<meta property="og:url" content="https://hansumfella.com" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="hansumfella" />
			<meta property="og:description" content="he's so hansum" />
			<meta property="og:image" content="images/hansum-circle.png" />

			{/* <!-- Twitter Meta Tags --> */}
			<meta name="twitter:card" content="summary_small_image" />
			<meta property="twitter:domain" content="hansumfella.com" />
			<meta property="twitter:url" content="https://hansumfella.com" />
			<meta name="twitter:title" content="hansumfella" />
			<meta name="twitter:description" content="he's so hansum" />
			<meta name="twitter:image" content="images/hansum-circle.png" />
		</Head>

		<Box>
			<NavBar />
			<Box
				display={'flex'}
				flexDirection={'column'}
			>

				<Hero />

				<Box
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'center'}
					w={'100vw'}
					pt={'5rem'}
					backgroundColor={'brand.alt.pink.700'}
				>

					<Box
						w="100vw"
						display="flex"
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
						p={'0.5rem'}
					>
						 {/* <Heading
							fontSize="3xl"
							fontWeight="bold"
							color="brand.gray.100"
							mb={8}
						>
							Merch Coming Soon...
						</Heading> */}


						<VStack id='shop-main-page' spacing={8}>
							{products.map((product) => {
								return (
									<Product 
										title={product.title}
										image={product.images[0].src}
										type={product.product_type}
										price={product.variants[0].price}
										id={product.id}
										stock={product.variants[0].inventory_quantity}
									/>
								)
							})}
						</VStack>

						<Box h={'2rem'} />


					</Box>
					<Footer />
				</Box>

			</Box>

		</Box>
		

    </ChakraProvider>
  )
}
