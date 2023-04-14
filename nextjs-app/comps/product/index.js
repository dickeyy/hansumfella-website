import Head from 'next/head'
import { Box, Button, ChakraProvider, HStack, Heading, Image, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaEye, FaShieldAlt, FaShoppingCart, FaStar } from 'react-icons/fa'
import { RiRadioButtonLine } from 'react-icons/ri'

import theme from '../../styles/theme.js'
import React from 'react'
import AddToCartButton from '../addToCartButton/index.js'

export default function Product(props) {

    const [ inStock, setInstock ] = React.useState(true)
    const [ stockColor, setStockColor ] = React.useState('green.200')

    React.useEffect(() => {

        if (props.stock <= 0) {
            setInstock(false)
            setStockColor('red.200')
        } else if (props.stock <= 5) {
            setStockColor('orange.200')
        }

    }, [])

  return (
    <Box
        display={'flex'}
        flexDir={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
        transition={'all 0.2s ease-in-out'}
        backgroundColor={'rgba(15,16,32,0.7)'}
        backdropFilter={'blur(10px)'}
        boxShadow={'rgba(28, 28, 28, 0.2) 0px 0px 10px'}
        borderRadius={'10px'}
        p={'0.8rem'}
    >
        
        <Image src={props.image} 
            borderRadius={'8px'}
            objectFit={'cover'}
            w={['5rem', '8rem', '10rem']}
            h={['5rem', '8rem', '10rem']}
            mr={'1rem'}
        />
        <Box 
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'left'}
            alignItems={'left'}
            textAlign={'left'}
            w={['15rem', '20rem', '30rem']}
        >
            <Heading
                fontSize={['2xl', '3xl', '4xl']}
                maxW={'30rem'}
                maxH={'5rem'}
                textOverflow={'ellipsis'}
                overflow={'hidden'}
                whiteSpace={'nowrap'}
            >
                {props.title}
            </Heading>

            <Text
                color={'white'}
                fontSize={'2xl'}
                fontWeight={'medium'}
            >
                ${props.price} USD
            </Text>

            <Text
                color={stockColor}
                fontSize={'md'}
                fontWeight={'medium'}
            >
                {props.stock.toLocaleString()} in stock
            </Text>

            <HStack
                mt={'0.5rem'}
            >
                <AddToCartButton 
                    colorScheme={'brand.alt.pink'}
                    variant={'solid'}
                    w={['6.7rem','10rem']}
                    size={['sm', 'md', 'lg']}
                    isDisabled={!inStock}
                    varientId={props.varientId}
                    quantity={{value: 1}}
                />

                <a
                    href={`/product/${props.id}`}
                >
                    <Button
                        leftIcon={<FaEye />}
                        colorScheme={'brand.alt.pink'}
                        variant={'outline'}
                        // isDisabled={true}
                        w={['6.7rem', '10rem']}
                        size={['sm', 'md', 'lg']}
                    >More Info</Button>
                </a>
            </HStack>
        </Box>
    </Box>
  )
}
