import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/provider'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react';
import { GoogleAnalytics } from "nextjs-google-analytics";

import Cookies from 'universal-cookie';

import theme from '../styles/theme.js'

export default function App({ Component, pageProps }) {

  // check if a cart exists in a cookie
  const cookies = new Cookies();

  const cartCookie = cookies.get('cart')

  if (!cartCookie) {

    // if no cart cookie exists, create one
    cookies.set('cart', '[]', { path: '/' });

  }


  return (
    <ChakraProvider theme={theme}>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}