import { Box, Button, ButtonGroup, ChakraProvider, Grid, GridItem, Heading, Hide, IconButton, Image, Spinner, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic.js'

import theme from '../../styles/theme.js'

import React from 'react'
import { FaDiscord, FaInstagram, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { TwitchChat, TwitchPlayerNonInteractive } from 'react-twitch-embed';

export default function Hero(props) {

    const [bgPos, setBgPos] = React.useState({ x: 0, y: 0 });
    const [botStats, setBotStats] = React.useState({});
    const [users, setUsers] = React.useState(0);
    const [servers, setServers] = React.useState(0);

    React.useEffect(() => {

        const handleMouseMove = (e) => {
            setBgPos({
                x: e.clientX / window.innerWidth * 5,
                y: e.clientY / window.innerHeight * 5,
            });

        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };

       
    }, []);



  return (
    <ChakraProvider theme={theme}>
      
        <Box
            display={'flex'}
            w={'100vw'}
            h={'100vh'}
            bgImage={'url(images/Sprinkle.png)'}
            bgPos={'static'}
            bgBlendMode={'overlay'}
            bgColor={'rgba(0,0,0,0.4)'}
            // make the background parralax
            bgAttachment={'fixed'}
            flexDirection={'column'}
            bgPosition={`${bgPos.x}% ${bgPos.y}%`}
        >  

            <Box
                display={'flex'}
                flexDirection={'row'}
            >

                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    textAlign={['center', 'center', 'center', 'left']}
                    w={['100vw', '100vw', '100vw', '50vw']}
                    h={'75vh'}
                    pl={['1', '1', '10vw', '10vw']}
                    mt={['2rem', '5rem', '10vh', '15vh']}
                    pt={['10rem', '8rem', '0', '0']}
                    flexDirection={'column'}
                >

                    <Heading as={'h1'} fontSize={['5xl','7xl','7xl','7xl']} pr={['5','5','5','0']} pl={['5','5','5','0']} >
                        The <Heading as={'span'} fontSize={['5xl','7xl','7xl','7xl']} color={'brand.purple.500'}>most</Heading> handsome fella on twitch
                    </Heading>

                    <Text fontSize={'xl'} pr={['10','10','10','0']} pl={['10','10','10','0']} w={['100vw', '100vw', '100vw', '40vw']}  mt={'8'} fontWeight={'medium'} color={'brand.gray.300'}>
                        Gaming, humor, looks, and smarts. <Text as={'span'} color={'brand.brown.700'} fontWeight={'bold'}>Fella</Text> has it all!
                    </Text>

                    <Box
                        display={'flex'}
                        flexDirection={'row'}
                        // align the buttons to the left on mobile
                        w={['100vw', '100vw', '40vw', '40vw']}
                        justifyContent={['center', 'center', 'flex-start', 'flex-start']}
                        mt={'8'}
                    >
                        <Grid templateColumns={'repeat(3,2fr)'} gap={3}>
                            <GridItem>
                                <a href='https://twitch.tv/hansumfella' target={'_blank'}>
                                    <IconButton icon={<FaTwitch />} colorScheme={'brand.purple'} ml={['1rem', '1rem','0','0']} mb={'1rem'} variant={'solid'} size={'lg'} fontSize={'3xl'} fontWeight={'bold'} p={'2rem 1.5rem'}></IconButton>
                                </a>
                            </GridItem>

                            <GridItem>
                                <a href='https://discord.com/invite/dQRZeCJv' target={'_blank'}>
                                    <IconButton icon={<FaDiscord />} colorScheme={'brand.blurple'} ml={['1rem', '1rem','0','0']} mb={'1rem'} variant={'solid'} size={'lg'} fontSize={'3xl'} fontWeight={'bold'} p={'2rem 1.5rem'}></IconButton>
                                </a>
                            </GridItem>

                            <GridItem>
                                <a href='https://www.tiktok.com/@hansumfellaclips' target={'_blank'}>
                                    <IconButton icon={<FaTiktok />} colorScheme={'blue'} ml={['1rem', '1rem','0','0']} mb={'1rem'} variant={'solid'} size={'lg'} fontSize={'3xl'} fontWeight={'bold'} p={'2rem 1.5rem'}></IconButton>
                                </a>
                            </GridItem>

                            <GridItem>
                                <a href='https://www.youtube.com/@hansumfella' target={'_blank'}>
                                    <IconButton icon={<FaYoutube />} colorScheme={'red'} ml={['1rem', '1rem','0','0']} mb={'1rem'} variant={'solid'} size={'lg'} fontSize={'3xl'} fontWeight={'bold'} p={'2rem 1.5rem'}></IconButton>
                                </a>
                            </GridItem>

                            <GridItem>
                                <a href='https://www.instagram.com/hansumfellaaa/' target={'_blank'}>
                                    <IconButton icon={<FaInstagram />} colorScheme={'pink'} ml={['1rem', '1rem','0','0']} mb={'1rem'} variant={'solid'} size={'lg'} fontSize={'3xl'} fontWeight={'bold'} p={'2rem 1.5rem'}></IconButton>
                                </a>
                            </GridItem>

                            <GridItem>
                                <a href='https://twitter.com/HansumFellaLIVE' target={'_blank'}>
                                    <IconButton icon={<FaTwitter />} colorScheme={'twitter'} ml={['1rem', '1rem','0','0']} mb={'1rem'} variant={'solid'} size={'lg'} fontSize={'3xl'} fontWeight={'bold'} p={'2rem 1.5rem'}></IconButton>
                                </a>
                            </GridItem>
                        </Grid>
                    </Box>

                    <Box zIndex={'5'} display={'flex'} flexDir={['column', 'column', 'column', 'column']} w={['100vw', '100vw', '40vw', '40vw']} justifyContent={['center','center','left','left']} mt={3} >
                        
                        {botStats == {} ? <Spinner /> : 

                            <Box>
                                <Text>
                                    <Text as={'span'} fontSize={'2xl'} fontWeight={'medium'} color={'brand.gray.300'}>Over </Text>
                                    <Text as={'span'} fontSize={'2xl'} fontWeight={'bold'} color={'brand.gray.100'}>10,000</Text>
                                    <Text as={'span'} fontSize={'2xl'} fontWeight={'medium'} color={'brand.gray.300'}> followers,</Text>
                                </Text>
                                <Text>
                                    <Text as={'span'} fontSize={'2xl'} fontWeight={'medium'} color={'brand.gray.300'}>and </Text>
                                    <Text as={'span'} fontSize={'2xl'} fontWeight={'bold'} color={'brand.gray.100'}>millions</Text>
                                    <Text as={'span'} fontSize={'2xl'} fontWeight={'medium'} color={'brand.gray.300'}> of views</Text>
                                </Text>
                            </Box>
                        }

                    </Box>

                </Box>      

                

                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    w={['100vw', '100vw', '50vw', '50vw']}
                    mt={'10rem'}
                    pr={['1', '1', '10vw', '10vw']}
                    ml={'5rem'}
                    flexDirection={'column'}
                    borderRadius={'8px'}
                >

                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        w={['100vw', '100vw', '50vw', '50vw']}
                        pr={['1', '1', '10vw', '10vw']}
                        ml={'5rem'}
                        flexDirection={'row'}
                        borderRadius={'8px'}
                    >
                        <TwitchPlayerNonInteractive channel={'hansumfella'} />
                        <TwitchChat channel={'hansumfella'} height={'100%'}/>
                    </Box>

                </Box>

            </Box>
            
            <Image src={'images/wave.png'} w={'100vw'} h={['25%', '25%', '25%', '10%']} />

        </Box>       

    </ChakraProvider>
  )
}
