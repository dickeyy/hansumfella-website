import { Box, Button, ChakraProvider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Hide, IconButton, Image, Link, Show, Tag, Text, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { GiHamburger, GiHamburgerMenu } from 'react-icons/gi';
import { FaEye, FaShieldAlt, FaShoppingCart, FaStar, FaTrash } from 'react-icons/fa'

import { useRouter } from 'next/router'
import theme from '../../styles/theme.js'

import Cart from '../cart/index.js';

export default function NavBar(props) {
    const activePage = props.active

	const router = useRouter()

    const [size, setSize] = useState('')

    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = () => {
        onOpen()
    }

    
  return (
    <Box theme={theme}>
      
        <Box
            display={'flex'}
            w={'90vw'}
            p={'0.7rem'}
            position={'fixed'}
            top={'0'}
            left={'5vw'}
            height={'fit-content'}
            backgroundColor={'rgba(180, 180, 180, 0.2)'}
            backdropFilter={'blur(10px)'}
            boxShadow={'rgba(28, 28, 28, 0.2) 0px 0px 10px'}
            borderRadius={'8px'}
            margin={'1rem auto'}
            zIndex={'100'}
        >

            <a href='/' >            
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    w={'fit-content'}
                    h={'fit-content'}
                    left={'0'}
                    ml={['','5','5','2']}
                    mt={'0.2rem'}
                >
                    <Image src={'/images/hansum-circle.png'} alt={'logo'} w={'2.5rem'} h={'2.5rem'} p={0} />

                    <Hide breakpoint='(max-width: 340px)'>
                        <Text
                            fontSize={'1.5rem'}
                            fontWeight={'bold'}
                            ml={'0.5rem'}
                            _hover={{
                                opacity: '0.4',
                            }}
                        >
                            hansum
                        </Text>

                    </Hide>
                </Box>
            </a>


            <Hide breakpoint='(max-width: 530px)'>
                <Box 
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    w={'fit-content'}
                    h={'fit-content'}
                    // put this on the right side
                    width={'90vw'}
                    mt={'0.2rem'}
                    
                >
                    <a href={'/#shop-main-page'} >
                        <Text
                            fontSize={'1rem'}
                            fontWeight={'medium'}
                            p={'0.5rem 1rem'}
                            _hover={{
                                opacity: '0.4',
                            }}
                            color={'white'}
                            backgroundColor={'rgba(0, 0, 0, 0)'}
                            borderRadius={'8px'}
                        >
                            Shop
                        </Text>
                    </a>
                    <a href='https://streamlabs.com/hansumfella/tip' target='_blank' >
                        <Text
                            fontSize={'1rem'}
                            fontWeight={'medium'}
                            p={'0.5rem 1rem'}
                            _hover={{
                                opacity: '0.4',
                            }}
                            color={'white'}
                            backgroundColor={'rgba(0, 0, 0, 0)'}
                            borderRadius={'8px'}
                        >
                            Donate
                        </Text>
                    </a>
                </Box>
            </Hide>

            <Cart />

            <Show breakpoint='(max-width: 530px)'>
                <Box 
                    display={'flex'}
                    position={'absolute'}
                    right={'20'}
                    mr={'1rem'}
                >
                    <Button
                        onClick={() => handleClick(size)}
                        key={size}
                        pr={1}
                        leftIcon={<GiHamburgerMenu />} 
                    ></Button>


                    <Drawer onClose={onClose} isOpen={isOpen} size={'xs'}>
                        <DrawerOverlay />
                        <DrawerContent 
                            borderLeftRadius={'8px'}
                            backgroundColor={'rgba(180, 180, 180, 0.2)'}
                            backdropFilter={'blur(15px)'}
                            boxShadow={'rgba(28, 28, 28, 0.2) 0px 0px 10px'}
                        >   
                            <br></br>
                            <br></br>
                            <DrawerCloseButton size={'lg'} />
                            <DrawerHeader fontSize={50} fontWeight={700}>Pages</DrawerHeader>
                            <DrawerBody>
                                <a href='/#shop-main-page'>
                                    <Button colorScheme={'brand.alt.pink'} w={'100%'} variant={'solid'} size={'lg'} fontSize={'20'} fontWeight={700}>
                                        Shop
                                    </Button>
                                </a>
                                <br></br>
                                <br></br>
                                <a href='https://streamlabs.com/hansumfella/tip' target='_blank'>
                                    <Button colorScheme={'brand.alt.pink'} w={'100%'} variant={'solid'} size={'lg'} fontWeight={700}>
                                        Donate
                                    </Button>
                                </a>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Box>
            </Show>
        </Box>
        
    </Box>
  )
}
