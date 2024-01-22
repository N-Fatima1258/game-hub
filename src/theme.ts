// we are going to customize the defaukt theme that comes with chakra


import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// create a config object and annotate it with ThemeConfig
const config: ThemeConfig = {
    initialColorMode: 'dark'
}
const theme = extendTheme({config})
// import it in main
export default theme;





// search for color mode in chakra
// chakra stores the selected mode in the local storage so it can remember itin future
// chrome dev tools> application tab >local storage>http://localhost..     ,,,, delete the light mode  ,, now your app is in the dark mode ,, again open local storage , now dark mode is stored so that it would be remember in future sessions