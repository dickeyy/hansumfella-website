import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
  styles: {
    global: {
      body: {
        bg: '#030008',
        color: 'white',
      },
    },
  },
  colors: {
    brand: {
        blurple: {
          50: "#F4F6FF",
          100: "#E9EDFF",
          200: "#C5C9FF",
          300: "#A2A5FF",
          400: "#7F81FF",
          500: "#5865F2",
          600: "#485BDA",
          700: "#3641B7",
          800: "#2B308D",
          900: "#1E1F63",
        },
        purple: {
            50: "#F9F8FF",
            100: "#F5F3FF",
            200: "#E0B4FF",
            300: "#C77DFF",
            400: "#9D4EDD",
            500: "#7B2CBF",
            600: "#5A189A",
            700: "#3C096C",
            800: "#240046",
            900: "#10002B",
        }
    }
  }
}

// 3. extend the theme
const theme = extendTheme(config)

export default theme