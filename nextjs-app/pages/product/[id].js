import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/provider'
import theme from '@/styles/theme'
import { Box, Heading, Text, VStack } from '@chakra-ui/layout'
import axios from 'axios'
import React from 'react'

// Components
import NavBar from '@/comps/navbar'
import Product from '@/comps/product'
import { useRouter } from 'next/router'

export default function Home() {

	const [product, setProduct] = React.useState([])
    const { id } = useRouter().query

	React.useEffect(() => {
		axios.get(`/api/fetch-product-by-id?id=${id}`)
			.then((res) => {
				console.log(res.data.products)
				setProducts(res.data.products.data)
			})
	}, [])

  return (
    <ChakraProvider theme={theme}>
		<Head>
			<title>{product.title}</title>
			<meta name="description" content="he's so hansum" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="../images/hansum-circle.png" />

			{/* //   <!-- Facebook Meta Tags --> */}
			<meta property="og:url" content="https://hansumfella.com" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="hansumfella" />
			<meta property="og:description" content="he's so hansum" />
			<meta property="og:image" content="../images/hansum-circle.png" />

			{/* <!-- Twitter Meta Tags --> */}
			<meta name="twitter:card" content="summary_small_image" />
			<meta property="twitter:domain" content="hansumfella.com" />
			<meta property="twitter:url" content="https://hansumfella.com" />
			<meta name="twitter:title" content="hansumfella" />
			<meta name="twitter:description" content="he's so hansum" />
			<meta name="twitter:image" content="../images/hansum-circle.png" />
		</Head>

		<Box 
			w="100vw"
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
		>
			
			<NavBar active={"Home"} />

			<Box
				w="100vw"
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				mt="10vh"
			>
				<Heading
					fontSize="7xl"
					fontWeight="bold"
					mb={8}
				>
				</Heading>

			</Box>

		</Box>

    </ChakraProvider>
  )
}
