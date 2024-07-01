import React, { useContext } from 'react'
import { Button, Text } from '@chakra-ui/react'
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Context from '../../context/CartContext';

const CartWidget = () => {

  const { getQuantity } = useContext(Context)

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
          <Text fontSize={'small'}>
            {getQuantity() > 0 && getQuantity()}
          </Text>       
        </Link>
    </Button>
  )
}

export default CartWidget
