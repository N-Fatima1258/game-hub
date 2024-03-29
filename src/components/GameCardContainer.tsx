import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react';
interface Props{
    children: ReactNode;
  }
  

const GameCardContainer = ({children}: Props) => {
  return (
<Box borderRadius={10} overflow='hidden'>
    {children}
</Box>  )
}

export default GameCardContainer

// Box ===> when rendered, it returns a div
// be default, the width is going to be 100%