import React from 'react'
import { Heading } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'

const ItemListContainer = ({title}) => {
  return (
    <Flex 
    w={'100%'} 
    justify={'center'} 
    alignItems={'center'}
    marginTop={'2rem'}>
        <Heading 
        className='section-heading'>
          {title}
        </Heading>
    </Flex>
  )
}

export default ItemListContainer
