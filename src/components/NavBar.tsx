import { HStack, Image  } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch/>
    </HStack>
  );
};

export default NavBar;

// HStack => we want to layout our items horizontally
// webp images are highly optimized images for the web
// we have to import image like a regular JS module on the top
//now add this navbar component to our grid in the app component
