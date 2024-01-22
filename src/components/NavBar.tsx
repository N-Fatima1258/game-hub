import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;

// HStack => we want to layout our items horizontally
// webp images are highly optimized images for the web
// we have to import image like a regular JS module on the top
//now add this navbar component to our grid in the app component
