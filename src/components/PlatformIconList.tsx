import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    //keys that represent the slug of each platform
    // name: PlayStation
    //slug: playstation
    // map the slug of each platform to an icon component
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
// as =>prop
// {[key: string]} => we have to annotate iconMap . LETS say this is an object, in this object we are going to have any number of string keys (This is called an index signature) ,,,, pc, playstation, xbox etc are keys ,,,, each key is mapped to a value of type IconType ,,,,   so this represent a key or property in this object ,,,, by using an index signature syntax , we donot have to specify the name of these keys ,,,,,,
//{name: string} but when you wrap this in [] like [{name: string}] you are defining an index signature


// gray.500 ==>  styled system>default theme
// marginY={1} => this would be a  multiple of theme.space value(4px) ,, so if we pass 1 , it would be 1 x 4 = 4px
 // marginY = {'10px' }