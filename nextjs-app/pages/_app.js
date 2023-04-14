import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/provider'
import React from 'react';
import { GoogleAnalytics } from "nextjs-google-analytics";

import theme from '../styles/theme.js'

export default function App({ Component, pageProps }) {

  return (
    <ChakraProvider theme={theme}>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}