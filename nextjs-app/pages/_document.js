import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react';

import theme from '../styles/theme.js'

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Modak&display=swap" rel="stylesheet"></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
