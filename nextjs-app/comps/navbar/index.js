import { Box, Button, ChakraProvider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Hide, IconButton, Image, Link, Show, Text, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { GiHamburger, GiHamburgerMenu } from 'react-icons/gi';
import { FaEye, FaShieldAlt, FaShoppingCart, FaStar, FaTrash } from 'react-icons/fa'

import { useRouter } from 'next/router'
import theme from '../../styles/theme.js'

import Cookies from 'universal-cookie';

export default function NavBar(props) {
    const activePage = props.active

    const cookies = new Cookies();

    const [cmdsActive, setCmdsActive] = useState(false)
    const [donateActive, setDonateActive] = useState(false)

	const router = useRouter()

    const [size, setSize] = useState('')

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [cart, setCart] = useState([])

    const handleClick = () => {
        onOpen()
    }

    // make a second drawer for the cart
    const { isOpen: isOpenCart, onOpen: onOpenCart, onClose: onCloseCart } = useDisclosure()

    const handleClickCart = () => {
        onOpenCart()
    }

    const clearCart = () => {
        cookies.set('cart', [], { path: '/' })
        setCart([])
    }

    useEffect(() => {
        setCart(cookies.get('cart'))
    }, [])

    
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
                    <a href={'#shop-main-page'} >
                        <Text
                            fontSize={'1rem'}
                            fontWeight={cmdsActive ? 'bold' : 'medium'}
                            p={'0.5rem 1rem'}
                            _hover={{
                                opacity: '0.4',
                            }}
                            color={cmdsActive ? 'brand.brown.50' : 'white'}
                            backgroundColor={cmdsActive ? 'brand.brown.900' : 'rgba(0, 0, 0, 0)'}
                            borderRadius={'8px'}
                        >
                            Shop
                        </Text>
                    </a>
                    <a href='https://streamlabs.com/hansumfella/tip' target='_blank' >
                        <Text
                            fontSize={'1rem'}
                            fontWeight={donateActive ? 'bold' : 'medium'}
                            p={'0.5rem 1rem'}
                            _hover={{
                                opacity: '0.4',
                            }}
                            color={donateActive ? 'brand.brown.50' : 'white'}
                            backgroundColor={donateActive ? 'brand.brown.900' : 'rgba(0, 0, 0, 0)'}
                            borderRadius={'8px'}
                        >
                            Donate
                        </Text>
                    </a>
                </Box>
            </Hide>

                
            <IconButton
                aria-label='Dashboard'
                as={FaShoppingCart }
                p={'0.6rem'}
                cursor={'pointer'}
                variant={'solid'}
                color={'brand.alt.pink.50'}
                borderRadius={'8px'}
                // put this on the right side
                position={'absolute'}
                right={'0'}
                mt={'-0.2rem'}
                mr={'0.7rem'}
                size={'lg'}
                onClick={() => (
                    // open a drawer
                    handleClickCart()
                )}
            >   
            </IconButton>
            <Drawer onClose={onCloseCart} isOpen={isOpenCart} size={'lg'}>
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
                            <DrawerHeader fontSize={50} fontWeight={700}>Shopping Cart</DrawerHeader>
                            <DrawerBody>
                                {cart && cart.length > 0 ?
                                    <Box>
                                        {cart.map((item, index) => (
                                            <Box
                                                display={'flex'}
                                                alignItems={'center'}
                                                justifyContent={'center'}
                                                w={'100%'}
                                                h={'10rem'}
                                                position={'relative'}
                                                top={'0'}
                                                left={'0'}
                                                mt={'0.2rem'}
                                                borderRadius={'8px'}
                                                color={'white'}
                                                borderWidth={'1px'}
                                                fontSize={'1rem'}
                                                fontWeight={'bold'}
                                                p={'0.1rem 0.5rem'}
                                            >
                                                <Image src={item.image} alt='logo' w={'8rem'} h={'8rem'} p={0} borderRadius={'8px'} />
                                                <Text
                                                    fontSize={'xl'}
                                                    fontWeight={'bold'}
                                                    ml={'0.5rem'}
                                                >
                                                    {item.title}
                                                </Text>

                                            </Box>
                                        ))}
                                        <br></br> <br></br>
                                        <Button leftIcon={<FaStar />} colorScheme='brand.alt.pink' variant='solid' size='lg' w={'100%'} mt={'1rem'}>Checkout</Button>
                                        <Button leftIcon={<FaTrash />} colorScheme='brand.alt.pink' variant='outline' size='lg' w={'100%'} mt={'1rem'}
                                            onClick={() => (
                                                // clear cookie
                                                clearCart()
                                            )}
                                        >Clear Cart</Button>
                                    </Box>
                                :
                                    <Box
                                        display={'flex'}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                        w={'100%'}
                                        h={'10rem'}
                                        position={'relative'}
                                        top={'0'}
                                        left={'0'}
                                        mt={'0.2rem'}
                                        borderRadius={'8px'}
                                        fontSize={'2xl'}
                                        borderWidth={'1px'}
                                        fontWeight={'bold'}
                                        p={'0.1rem 0.5rem'}
                                    >
                                        Your cart is empty!
                                    </Box>
                                }
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>

            {cart && cart.length > 0 && 
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    w={'fit-content'}
                    h={'fit-content'}
                    position={'absolute'}
                    top={'0'}
                    right={'0'}
                    mt={'0.2rem'}
                    mr={'0.2rem'}
                    borderRadius={'50%'}
                    backgroundColor={'brand.alt.pink.600'}
                    color={'brand.alt.brown.50'}
                    fontSize={'1rem'}
                    fontWeight={'bold'}
                    p={'0.1rem 0.5rem'}
                >
                    {cart.length}
                </Box>
            }
            

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
                                <a href='#shop-main-page'>
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
