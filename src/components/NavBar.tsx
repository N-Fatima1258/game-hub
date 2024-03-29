import { HStack, Image  } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
 interface Props {
  onSearch: (searchText: string) => void;
 }
const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch/>
    </HStack>
  );
};

export default NavBar;

// HStack => we want to layout our items horizontally
// webp images are highly optimized images for the web
// we have to import image like a regular JS module on the top
//now add this navbar component to our grid in the app component 

