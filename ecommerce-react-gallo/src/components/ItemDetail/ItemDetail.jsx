import React from 'react'
import {
    Button, 
    Flex,
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


const ItemDetail = ({id, name, brand, price, category, stock, description, img}) => {
    const onAdd = (quantity) => {
        toast(`You added ${quantity} units of ${name}`)
    };
    
    return (
    <Flex>
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
          < ItemCount stock={stock} onAdd={onAdd}/>
          < ToastContainer />
        </Flex>
      </Card>
    </Flex>
  )
}

export default ItemDetail
