import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
    
    </MenuButton>
    
    <MenuList>
       
    </MenuList>
        </Menu>
  )
}

export default SortSelector