import React from 'react'
import { Box } from '@chakra-ui/react'
import { IoCartOutline } from "react-icons/io5";

const CartWidget = () => {
  return (
    <Box fontSize={'1.5rem'}>
        <IoCartOutline  />
    </Box>
  )
}

export default CartWidget
