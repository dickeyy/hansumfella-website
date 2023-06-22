import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/provider'
import theme from '@/styles/theme'
import { Box, Heading } from '@chakra-ui/layout'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

// Components
import NavBar from '@/comps/navbar'
import Footer from '@/comps/footer'

export default function Terms() {

	const { toggleColorMode } = useColorMode();
  	const text = useColorModeValue('dark', 'light');

	React.useEffect(() => {

		setTimeout(() => {
			if (text === 'dark') {
				console.log('dark')
				// set the color mode to dark
				toggleColorMode()
			}
		}, 2000)
	}, [])
	

  return (
    <ChakraProvider theme={theme}>
		<Head>
			<title>hansumfella | Refunds</title>
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

		<Box>
			<NavBar />
			<Box
				display={'flex'}
				flexDirection={'column'}
			>

				<Box
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'center'}
					w={'100vw'}
                    mt={'2rem'}
                    p={'5rem'}
				>
                    <Heading fontSize={'5xl'} textAlign={'center'}>Contact Details</Heading>
                    <br />
					<p>Trade name: Hansumfella LLC.</p>
                    <p>Phone number: </p>
                    <p>Email: hello@hansumfella.com</p>
                    <p>Physical address: </p>
                    <p>VAT number:</p>
                    <p>Trade number:</p>
				</Box>

			</Box>
		    <Footer />


		</Box>
		

    </ChakraProvider>
  )
}
