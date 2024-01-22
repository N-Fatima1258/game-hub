import { HStack, Switch, Text, useColorMode} from '@chakra-ui/react'


const ColorModeSwitch = () => {
    //colorMode property represents the current mode
   const{toggleColorMode, colorMode} = useColorMode();
  return (
    <HStack>
     <Switch colorScheme= 'green' isChecked= {colorMode === 'dark'} onChange={toggleColorMode}/>
     <Text>Dark Mode</Text>

    </HStack>
  )
}

export default ColorModeSwitch

// to work with color modes, we have to use custom hooks define in chakra   ===> useColorMode

// add this to NavBar  