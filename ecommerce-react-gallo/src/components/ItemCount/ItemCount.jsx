import React, { useState } from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { RiArrowGoBackLine } from "react-icons/ri";

const ItemCount = ({stock, onAdd, maxAvailable}) => {
    const [count, setCount] = useState(1) ;

    const increase = () => {
      count < maxAvailable && setCount(count + 1)
    };

    const decrease = () => {
      count > 1 && setCount(count - 1)
    };


    return (
        <Flex>
            <Flex>
              <Button onClick={decrease}>-</Button>
              <Text padding={'.5rem'}>
                {count}
              </Text>
              <Button onClick={increase}>+</Button>
            </Flex>
            <Button onClick={() => onAdd(count)}>Add to cart</Button>
            <Link to={'/'}>
              <Button>
                < RiArrowGoBackLine />
              </Button>
            </Link>
        </Flex>
    )
}

export default ItemCount
