import React, { useState } from 'react'
import { Button, ButtonGroup, Flex } from '@chakra-ui/react'
const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1) ;

    const increase = () => {
      count < stock && setCount(count + 1)
    };

    const decrease = () => {
      count > 1 && setCount(count - 1)
    };


    return (
        <Flex>
            <Button onClick={decrease}>-</Button>
            {count}
            <Button onClick={increase}>+</Button>
            <Button onClick={() => onAdd(count)}>Add to cart</Button>
        </Flex>
    )
}

export default ItemCount
