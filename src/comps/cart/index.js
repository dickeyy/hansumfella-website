import { Box, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, IconButton, Image, Text, useDisclosure, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaShoppingCart, FaSmile, FaStar, FaTrash } from 'react-icons/fa'
import theme from '../../styles/theme.js'

export default function Cart(props) {

    const [cart, setCart] = useState({ id: null, lines: [] })

	const toast = useToast()

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
    console.log(cart)
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

                console.log(cart)

                return
            }

            localCartData = await fetch('/api/create-cart').then((res) => res.json());

            // if the cart id does not start with gid, then it is an error
            if (!localCartData.cartId.startsWith('gid')) {
                toast({
                    id:"cart-toast-error-1",
                    title: "Error",
                    status: "error",
                    description: `There was an error creating your cart. Please clear cookies and try again. `,
                    isClosable: true,
                    duration: 4000,
                })
                return
            }

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

            console.log(cart)

        }

        getCart()

        const washInterval = setInterval(() => {
            const state = window.localStorage.getItem('hansum:shopify:status')

            if (state && state === 'dirty') {
                getCart()
                window.localStorage.setItem('hansum:shopify:status', 'clean')
            }
        }, 100)
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
                                        flexDir={'column'}
                                    >
                                        <Box
                                            display={'flex'}
                                            flexDir={'row'}
                                            alignItems={'center'}
                                            justifyContent={'flex-start'}
                                            w={'100%'}
                                        >
                                            <Box
                                                display={'flex'}
                                                flexDir={'row'}
                                                alignItems={'center'}
                                                justifyContent={'flex-start'}
                                            >
                                                <IconButton id={item.node.id} as={FaTrash} size={'sm'} variant='outline' ml={'0.5rem'} p={1} onClick={() => {
                                                    removeLineItem(item.node.id)
                                                }} />
                                                <Image src={item.node.merchandise.product.images.edges[0].node.originalSrc} alt={item.node.merchandise.product.title} w={'3rem'} h={'3rem'} ml={'0.5rem'} borderRadius={'0.5rem'} />
                                                
                                            </Box>

                                            <Box
                                                display={'flex'}
                                                flexDir={'row'}
                                                alignItems={'center'}
                                                justifyContent={'flex-start'}
                                            >
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

                                            
                                        </Box>

                                        <Box
                                                display={'flex'}
                                                flexDir={'row'}
                                                alignItems={'center'}
                                                justifyContent={'flex-start'}
                                                w={'65%'}
                                            >
                                                <Text
                                                    fontSize={'xl'}
                                                    fontWeight={'normal'}
                                                    ml={'0.5rem'}
                                                >
                                                    Size: 
                                                </Text>
                                                <Text
                                                    fontSize={'xl'}
                                                    ml={'0.5rem'}
                                                    fontWeight={'bold'}
                                                >
                                                    {item.node.merchandise.title === 'Default Title' ? 'One Size' : item.node.merchandise.title}
                                                </Text>
                                                
                                            </Box>

                                    </Box>
                                ))}
                                <br></br> <br></br>
                                <Heading>
                                    Total: ${Number(cart.estimatedCost).toFixed(2)} 
                                </Heading>
                                <Text 
                                    color={'brand.gray.50'}
                                >
                                    Tax and shipping calculated at checkout
                                </Text>
                                <Button leftIcon={<FaStar />} colorScheme='brand.alt.pink' variant='solid' size='lg' w={'100%'} mt={'1rem'} isLoading={isCheckoutLoading} onClick={() => {
                                    getCheckoutUrl()
                                }}>Checkout</Button>
                                
                                <Button leftIcon={<FaTrash />} colorScheme='brand.alt.pink' variant='outline' size='lg' w={'100%'}  mt={'1rem'}
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
