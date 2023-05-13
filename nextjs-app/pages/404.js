import NavBar from "@/comps/navbar";
import theme from "@/styles/theme";
import { Box, Button, ChakraProvider, Code, Heading, Image, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function FourOhFourPage() {

    return (
        <ChakraProvider theme={theme}>
            <Head>
                <title>404: Page Not Found</title>
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
			
			    <NavBar active={"404"} />

                <Box
                    h={'100vh'}
					w="100vw"
					display="flex"
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
                    textAlign={'center'}
                    p={5}
                >
                    <Image src="/images/hansum-maid.jpg" borderRadius={'12px'} />
                    <br></br>
                    <Heading>We couldn't find that page...</Heading>
                    <Text mt={1} color={"brand.gray.50"}>So here's a picture of fella</Text>

                    <Code mt={4}>Error Code: 404</Code>

                    <Button mt={4} colorScheme="brand.alt.pink" w={['80vw', '50vw', '20vw', '20vw']} onClick={() => window.location.href = "/"}>Go Home</Button>
                </Box>

            </Box>
        </ChakraProvider>
    )

}