import { Box, Button, ChakraProvider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Hide, IconButton, Image, Link, Show, Text, useDisclosure } from '@chakra-ui/react'

import theme from '../../styles/theme.js'

export default function Footer(props) {

  return (
    <Box theme={theme}>
      
        <Box
            display={'flex'}
            w={'90vw'}
            p={'0.7rem'}
            bottom={'0'}
            left={'5vw'}
            height={'fit-content'}
            backgroundColor={'rgba(180, 180, 180, 0.2)'}
            backdropFilter={'blur(10px)'}
            boxShadow={'rgba(28, 28, 28, 0.2) 0px 0px 10px'}
            borderRadius={'8px'}
            margin={'1rem auto'}
            zIndex={'100'}
        >
            <Hide breakpoint='(max-width: 515px)'>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    w={'fit-content'}
                    h={'fit-content'}
                    left={'0'}
                    ml={['','5','5','2']}
                >

                    <Text
                        fontSize={'md'}
                        color={'brand.gray.50'}
                        ml={'0.5rem'}
                    >
                        © 2023 Hansumfella LLC.
                    </Text>
                </Box>

                
            </Hide>

            <Show breakpoint='(max-width: 515px)'>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    w={'100%'}
                    h={'fit-content'}
                    textAlign={'center'}
                    flexDir={'column'}
                >
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        textAlign={'center'}
                        w={'fit-content'}
                        h={'fit-content'}
                        mt={'0.2rem'}
                    >

                        <Text
                            fontSize={'md'}
                            color={'brand.gray.100'}
                        >
                            © 2023 Hansumfella LLC.
                        </Text>
                    </Box>
                </Box>
            </Show>
        </Box>
        
    </Box>
  )
}
