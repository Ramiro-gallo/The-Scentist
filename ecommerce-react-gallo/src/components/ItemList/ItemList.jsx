import React from 'react'
import Item from '../Item/Item'
import { Grid, Box } from '@chakra-ui/react'
import { Firestore, doc } from 'firebase/firestore'
 
const ItemList = ({products}) => {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      {
        products.map((prod) => (
            <Box width="100%" key={prod.id}>
                <Item {...prod} />
            </Box>
        ))
      }
    </Grid>
  )
}

export default ItemList
