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
            bgImage={'url(images/sprinkle-pink.png)'}
            bgPos={'static'}
            // zoom in on the background
            bgSize={'120%'}
            bgColor={'rgba(0,0,0,0.3)'}
            bgBlendMode={'overlay'}
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
                        The <Heading as={'span'} fontSize={['5xl','7xl','7xl','7xl']} color={'brand.alt.pink.500'}>most</Heading> handsome fella on Twitch
                    </Heading>

                    <Text fontSize={'xl'} pr={['10','10','10','0']} pl={['10','10','10','0']} w={['100vw', '100vw', '100vw', '40vw']} fontWeight={'medium'} color={'brand.gray.100'}>
                        He’s got his own website that’s pretty<Text as={'span'} color={'brand.alt.pink.300'} fontWeight={'bold'}> cool</Text>
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
                                    <IconButton icon={<FaTwitch />} colorScheme={'brand.alt.pink'} ml={['1rem', '1rem','0','0']} mb={'1rem'} variant={'outline'} size={'lg'} fontSize={'3xl'} fontWeight={'bold'} p={'2rem 1.5rem'}></IconButton>
                                </a>
                            </GridItem>

                            <GridItem>
                                <a href='https://discord.com/invite/dQRZeCJv' target={'_blank'}>
                                    <IconButton icon={<FaDiscord />} colorScheme={'brand.alt.pink'} ml={['1rem', '1rem','0','0']} mb={'1rem'} variant={'outline'} size={'lg'} fontSize={'3xl'} fontWeight={'bold'} p={'2rem 1.5rem'}></IconButton>
                                </a>
                            </GridItem>

                            <GridItem>
                                <a href='https://www.tiktok.com/@hansumfellaclips' target={'_blank'}>
                                    <IconButton icon={<FaTiktok />} colorScheme={'brand.alt.pink'} ml={['1rem', '1rem','0','0']} mb={'1rem'} variant={'outline'} size={'lg'} fontSize={'3xl'} fontWeight={'bold'} p={'2rem 1.5rem'}></IconButton>
                                </a>
                            </GridItem>

                            <GridItem>
                                <a href='https://www.youtube.com/@hansumfella' target={'_blank'}>
                                    <IconButton icon={<FaYoutube />} colorScheme={'brand.alt.pink'} ml={['1rem', '1rem','0','0']} mb={'1rem'} variant={'outline'} size={'lg'} fontSize={'3xl'} fontWeight={'bold'} p={'2rem 1.5rem'}></IconButton>
                                </a>
                            </GridItem>

                            <GridItem>
                                <a href='https://www.instagram.com/hansumfellaaa/' target={'_blank'}>
                                    <IconButton icon={<FaInstagram />} colorScheme={'brand.alt.pink'} ml={['1rem', '1rem','0','0']} mb={'1rem'} variant={'outline'} size={'lg'} fontSize={'3xl'} fontWeight={'bold'} p={'2rem 1.5rem'}></IconButton>
                                </a>
                            </GridItem>

                            <GridItem>
                                <a href='https://twitter.com/HansumFellaLIVE' target={'_blank'}>
                                    <IconButton icon={<FaTwitter />} colorScheme={'brand.alt.pink'} ml={['1rem', '1rem','0','0']} mb={'1rem'} variant={'outline'} size={'lg'} fontSize={'3xl'} fontWeight={'bold'} p={'2rem 1.5rem'}></IconButton>
                                </a>
                            </GridItem>
                        </Grid>
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
                        <TwitchPlayerNonInteractive style={{
                            borderRadius: '8px',
                            zIndex: '0',
                        }} channel={'hansumfella'}
                        noCookie={true}
                        />
                    </Box>

                </Box>

            </Box>
            
            <Image src={'images/wave-pink.png'} w={'100vw'} h={['25%', '18%', '15%', '10%']} />

        </Box>       

    </ChakraProvider>
  )
}
