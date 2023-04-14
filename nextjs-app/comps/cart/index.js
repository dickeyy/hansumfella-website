import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, IconButton, Image, Text, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaShoppingCart, FaStar, FaTrash } from 'react-icons/fa'

import theme from '../../styles/theme.js'

export default function Cart(props) {

    const [cart, setCart] = useState({ id: null, lines: [] })

    const [isCheckoutLoading, setIsCheckoutLoading] = useState(false)
    const [isClearLoading, setIsClearLoading] = useState(false)

    // make a second drawer for the cart
    const { isOpen: isOpenCart, onOpen: onOpenCart, onClose: onCloseCart } = useDisclosure()

    const handleClickCart = () => {
        onOpenCart()
    }

    const clearCart = () => {
        setIsClearLoading(true)

        window.localStorage.removeItem('hansum:shopify:cart')
        window.localStorage.setItem('hansum:shopify:status', 'dirty')

        setIsClearLoading(false)
    }

    const getCheckoutUrl = async () => {
        setIsCheckoutLoading(true)

        const result = await fetch(`/api/create-checkout?cartId=${cart.id}`).then((res) => res.json())

        window.location.href = result.data.data.cart.checkoutUrl
    }

    const removeLineItem = async (lineId) => {
        const result = await fetch('/api/remove-from-cart', {
            method: 'POST',
            body: JSON.stringify({
                cartId: cart.id,
                lineIds: [lineId]
            }),
        })

        if (!result.ok) {
            toast({
                id:"cart-toast-error-2",
                title: "Error",
                status: "error",
                description: `There was an error removing the item from your cart. `,
                isClosable: true,
                duration: 4000,
            })
            return
        }

        window.localStorage.setItem('hansum:shopify:status', 'dirty')
    }

    useEffect(() => {

        async function getCart() {
            setIsCheckoutLoading(false)
            let localCartData = JSON.parse(
                window.localStorage.getItem('hansum:shopify:cart')
            )

            if (localCartData) {
                    const existingCart = await fetch(`/api/load-cart?cartId=${localCartData.cartId}`).then((res) => res.json())

                setCart({
                    id: localCartData.cartId,
                    lines: existingCart.data.data.cart.lines.edges,
                    checkoutUrl: existingCart.data.data.cart.checkoutUrl,
                    estimatedCost: existingCart.data.data.cart.cost.subtotalAmount.amount,
                })

                return
            }

            localCartData = await fetch('/api/create-cart').then((res) => res.json());

            setCart({
                id: localCartData.cartId,
                lines: [],
                checkoutUrl: null,
                estimatedCost: null,
            });

            window.localStorage.setItem(
                'hansum:shopify:cart',
                JSON.stringify(localCartData)
            )

        }

        getCart()

        const washInterval = setInterval(() => {
            const state = window.localStorage.getItem('hansum:shopify:status')

            if (state && state === 'dirty') {
                getCart()
                window.localStorage.setItem('hansum:shopify:status', 'clean')
            }
        }, 200)

        return () => {
            clearInterval(washInterval)
        }

        

    }, [])
    
  return (
    <Box theme={theme}>
   
        <IconButton
            aria-label='Shopping Cart'
            as={FaShoppingCart }
            p={'0.6rem'}
            cursor={'pointer'}
            variant={'solid'}
            color={'brand.alt.pink.50'}
            bgColor={'transparent'}
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
        />
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
                        {cart && cart.lines.length > 0 ?
                            <Box>
                                {cart.lines.map((item, index) => (
                                    <Box
                                        display={'flex'}
                                        alignItems={'center'}
                                        w={'100%'}
                                        textAlign={'left'}
                                        position={'relative'}
                                        top={'0'}
                                        left={'0'}
                                        mt={'0.2rem'}
                                        borderRadius={'8px'}
                                        color={'white'}
                                        borderWidth={'1px'}
                                        fontSize={'1rem'}
                                        fontWeight={'bold'}
                                        p={'1rem'}
                                        key={index}
                                    >

                                        <IconButton id={item.node.id} as={FaTrash} size={'sm'} variant='outline' ml={'0.5rem'} p={1} onClick={() => {
                                            removeLineItem(item.node.id)
                                        }} />

                                        <Text
                                            fontSize={'xl'}
                                            fontWeight={'normal'}
                                            ml={'0.5rem'}
                                        >
                                            {item.node.quantity}x
                                        </Text>
                                        <Text
                                            fontSize={'xl'}
                                            fontWeight={'normal'}
                                            ml={'0.5rem'}
                                        >
                                            {item.node.merchandise.product.title}
                                        </Text>

                                    </Box>
                                ))}
                                <br></br> <br></br>
                                <Heading>
                                    Total: ${Number(cart.estimatedCost).toFixed(2)}
                                </Heading>
                                <Button leftIcon={<FaStar />} colorScheme='brand.alt.pink' variant='solid' size='lg' w={'100%'} mt={'1rem'} isLoading={isCheckoutLoading} onClick={() => {
                                    getCheckoutUrl()
                                }}>Checkout</Button>
                                <Button leftIcon={<FaTrash />} colorScheme='brand.alt.pink' variant='outline' size='lg' w={'100%'} mt={'1rem'}
                                    isLoading={isClearLoading}
                                    onClick={() => (
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

        {cart && cart.lines.length > 0 && 
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
                {cart.lines.length}
            </Box>
        }
        
    </Box>
  )
}
