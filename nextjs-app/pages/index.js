import Head from 'next/head'
import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/provider'
import theme from '@/styles/theme'
import { Box, Heading, Text } from '@chakra-ui/layout'
import { TwitchPlayer, TwitchChat, TwitchWindow } from 'react-twitch-embed'
import { Button } from '@chakra-ui/react'
import { FaDiscord, FaInstagram, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
		<Head>
			<title>hansumfella</title>
			<meta name="description" content="hes hansum" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="https://static-cdn.jtvnw.net/jtv_user_pictures/7b503c47-7f38-4915-a356-505dacb6ab76-profile_image-70x70.png" />

			{/* //   <!-- Facebook Meta Tags --> */}
			{/* <meta property="og:url" content="https://seedsbot.xyz" /> */}
			<meta property="og:type" content="website" />
			<meta property="og:title" content="hansumfella" />
			<meta property="og:description" content="hes hansum" />
			<meta property="og:image" content="https://static-cdn.jtvnw.net/jtv_user_pictures/7b503c47-7f38-4915-a356-505dacb6ab76-profile_image-70x70.png" />

			{/* <!-- Twitter Meta Tags --> */}
			<meta name="twitter:card" content="summary_small_image" />
			{/* <meta property="twitter:domain" content="seedsbot.xyz" /> */}
			{/* <meta property="twitter:url" content="https://seedsbot.xyz" /> */}
			<meta name="twitter:title" content="hansumfella" />
			<meta name="twitter:description" content="hes hansum" />
			<meta name="twitter:image" content="https://static-cdn.jtvnw.net/jtv_user_pictures/7b503c47-7f38-4915-a356-505dacb6ab76-profile_image-70x70.png" />
		</Head>

		<Box 
			w="100vw"
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
		>
			<Box
				w="100vw"
				h="100vh"
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
			>

				<Box
					w="100%"
					h="100%"
					display="flex"
					justifyContent="center"
					alignItems="center"
					flexDirection="row"
				>
					<TwitchPlayer channel="hansumfella" style={{ width: '70%', height: '90%' }} />
					<TwitchChat channel="hansumfella" style={{ width: '20%', height: '90%' }} />
				</Box>

				<Box 
					mt={-5}
					display="flex"
					justifyContent="center"
					alignItems="center"
					flexDirection="row"
				>

					<Button 
						onClick={() => window.open('https://www.tiktok.com/@hansumfellaclips', '_blank')} 
						mr={'5'} 
						leftIcon={<FaTiktok />}
						size="lg"
						colorScheme="blue"
					>
						TikTok
					</Button>

					<Button 
						onClick={() => window.open('https://www.twitch.tv/hansumfella', '_blank')} 
						mr={'5'} 
						leftIcon={<FaTwitch />}
						size="lg"
						colorScheme="purple"
					>
						Twitch
					</Button>

					<Button 
						onClick={() => window.open('https://discord.com/invite/dQRZeCJv', '_blank')} 
						mr={'5'} 
						leftIcon={<FaDiscord />}
						size="lg"
						colorScheme="brand.blurple"
					>
						Discord
					</Button>

					<Button 
						onClick={() => window.open('https://www.instagram.com/hansumfellaaa/', '_blank')} 
						mr={'5'} 
						leftIcon={<FaInstagram />}
						size="lg"
						colorScheme="pink"
					>
						Instagram
					</Button>

					<Button 
						onClick={() => window.open('https://twitter.com/HansumFellaLIVE', '_blank')} 
						mr={'5'} 
						leftIcon={<FaTwitter />}
						size="lg"
						colorScheme="twitter"
					>
						Twitter
					</Button>

					<Button 
						onClick={() => window.open('https://www.youtube.com/@hansumfella', '_blank')} 
						mr={'5'} 
						leftIcon={<FaYoutube />}
						size="lg"
						colorScheme="red"
					>
						YouTube
					</Button>

				</Box>
				<Box h={'2rem'} />

				
			
			</Box>


		</Box>

    </ChakraProvider>
  )
}
