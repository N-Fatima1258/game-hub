// we are going to customize the defaukt theme that comes with chakra


import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// create a config object and annotate it with ThemeConfig
const config: ThemeConfig = {
    initialColorMode: 'dark'
}
const theme = extendTheme({config,
    colors: {
        // various shades of gray and map them to different colors
        gray: {
        50: '#f9f9f9',
        100: '#ededed',
        200: '#d3d3d3',
        300: '#b3b3b3',
        400: '#a0a0a0',
        500: '#898989',
        600: '#6c6c6c',
        700: '#202020',
        800: '#121212',
        900: '#111'
        }
    }
})
// import it in main
export default theme;





// search for color mode in chakra
// chakra stores the selected mode in the local storage so it can remember itin future
// chrome dev tools> application tab >local storage>http://localhost..     ,,,, delete the light mode  ,, now your app is in the dark mode ,, again open local storage , now dark mode is stored so that it would be remember in future sessions


