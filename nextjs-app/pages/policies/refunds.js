import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/provider'
import theme from '@/styles/theme'
import { Box, Heading, Text, VStack } from '@chakra-ui/layout'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'

// Components
import NavBar from '@/comps/navbar'
import Product from '@/comps/product'
import Hero from '@/comps/homeHero'
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
			<title>hansumfella | ToS</title>
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

				<Box
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'center'}
					w={'100vw'}
                    mt={'2rem'}
                    p={'5rem'}
				>
                    <Heading fontSize={'5xl'} textAlign={'center'}>Refund Policy</Heading>
                    <br />
					We have a 30-day return policy, which means you have 30 days after receiving your item to request a return. 
                    <br /><br />
                    To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase. 
                    <br /><br />
                    To start a return, you can contact us at <a href="mailto:refund@hansumfella.com">refund@hansumfella.com</a>. Please note that returns will need to be sent to the following address: [INSERT RETURN ADDRESS] 
                    <br /><br />
                    If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted. 
                    <br /><br />
                    You can always contact us for any return question at <a href="mailto:refund@hansumfella.com">refund@hansumfella.com</a>. 
                    <br /><br />
					<Heading fontSize={"3xl"}>Damages and issues</Heading> 
                    <br />
                    Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.
                    <br /> <br />
					<Heading fontSize={"3xl"}>Exceptions / non-returnable items</Heading> 
                    <br />Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if you have questions or concerns about your specific item. 
					<br /><br />
					Unfortunately, we cannot accept returns on sale items or gift cards.
                    <br /> <br />
					<Heading fontSize={"3xl"}>Exchanges</Heading> 
                    <br />
                    The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.
                    <br /> <br />
					<Heading fontSize={"3xl"}>European Union 14 day cooling off period</Heading> 
                    <br />
                    Notwithstanding the above, if the merchandise is being shipped into the European Union, you have the right to cancel or return your order within 14 days, for any reason and without a justification. As above, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.
                    <br /> <br />
					<Heading fontSize={"3xl"}>Refunds</Heading> 
                    <br />
                    We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too. 
                    <br />
                    If more than 15 business days have passed since we’ve approved your return, please contact us at refunds@hansumfella.com.

				</Box>

			</Box>
		    <Footer />


		</Box>
		

    </ChakraProvider>
  )
}
