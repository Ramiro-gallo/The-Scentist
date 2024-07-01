import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Button 
      bg={'transparent'}
      fontSize={'1.5rem'}
      padding={'.75rem'}
      borderRadius={'17.5%'}
      color={'#fff8e7'}
      _hover={{ bg:'#241821' }}>
        <Link to={"/cart"}>
          <IoCartOutline  />
        </Link>
    </Button>
  )
}

export default CartWidget
