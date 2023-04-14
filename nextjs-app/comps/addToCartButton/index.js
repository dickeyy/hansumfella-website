import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, Image, Text, useDisclosure, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaShoppingCart, FaStar, FaTrash } from 'react-icons/fa'

import theme from '../../styles/theme.js'

export default function AddToCartButton(props) {

	const toast = useToast()

    const [isLoading, setIsLoading] = useState(false)

    async function addToCart() {

        const localCartData = JSON.parse(
            window.localStorage.getItem('hansum:shopify:cart')
        )

        if (!localCartData.cartId) {
            toast({
                id:"cart-toast-error-1",
                title: "Error",
                status: "error",
                description: `There was an error loading your cart. Please refresh the page and try again.`,
                isClosable: true,
                duration: 4000,
            })
            return
        }
        console.log(localCartData)
        const result = await fetch('/api/add-to-cart', {
            method: 'POST',
            body: JSON.stringify({
                cartId: localCartData.cartId,
                lines: [
                    {
                        quantity: Number(props.quantity.value),
                        merchandiseId: props.varientId,
                    }
                ]
            }),
        })

        if (!result.ok) {
            toast({
                id:"cart-toast-error-2",
                title: "Error",
                status: "error",
                description: `There was an error adding the item to your cart. `,
                isClosable: true,
                duration: 4000,
            })
            return
        }

        window.localStorage.setItem('hansum:shopify:status', 'dirty')

		toast({
			id:"cart-toast-added",
			title: "Added to cart",
			description: `Successfully added ${props.quantity.value} item(s) to your cart.`,
			status: "success",
			duration: 4000,
			isClosable: true,
		})

        setIsLoading(false)

	}

    
  return (
    <Box theme={theme}>
   
        <Button
            colorScheme={props.colorScheme}
            size={props.size}
            fontSize={props.fontSize}
            fontWeight={props.fontWeight}
            w={props.w}
            p={props.p}
            mb={props.mb}
            {...props}
            leftIcon={<FaShoppingCart />}
            isLoading={isLoading}
            onClick={() => {
                // add the product to the cart
                addToCart()
                setIsLoading(true)
                // show the user that the product was added to the cart
            }}
        >
            Add to Cart
        </Button>
        
    </Box>
  )
}
