import React from 'react'
import {
  Button, 
  Flex,
  Box,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  Text,
  Image,
} from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { ToastContainer, toast} from 'react-toastify'

const Item = ({id, name, price, img, description, stock}) => {

  const onAdd = (quantity) => {
    toast(`You added ${quantity} units of ${name}`)
  };
  
  return (
  
    <Box>
      <Card
      maxW='sm'>
        <CardBody>
          <Image
          src={img}
          alt={name}
          borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{name}</Heading>
              <Text>
                {description}
              </Text>
              <Text fontSize='2xl'>
                ${price}
              </Text>
          </Stack>
        </CardBody>
        <Divider />
        <Flex 
        justify="space-between"
        alignItems="center"
        p="1rem"
        >
          <Button>
            <Link to={`/product/${id}`}>Details</Link>
          </Button>
          <ItemCount stock={stock} onAdd={onAdd}/>
          < ToastContainer />
        </Flex>
      </Card>
    </Box>
  )
}

export default Item
