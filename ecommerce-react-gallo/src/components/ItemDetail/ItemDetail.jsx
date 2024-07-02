import React, { useContext } from 'react'
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
import { ToastContainer, toast} from 'react-toastify'
import Context from '../../context/CartContext'


const ItemDetail = ({id, name, brand, price, category, stock, description, img}) => {
    
    const { addItem } = useContext(Context)
  
    const onAdd = (quantity) => {
        const item = {
          id,
          name,
          price
        }
        addItem(item, quantity)
        toast(`You added ${quantity} units of ${name}`)
    };
    
    return (
    <Flex 
      w="100%"
      align={"center"}
      justify={"center"}
      m={"2rem 0"}
    >
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
        justify='center'
        alignItems="center"
        p="1rem"
        >
          < ItemCount stock={stock} onAdd={onAdd}/>
          < ToastContainer  />
        </Flex>
      </Card>
    </Flex>
  )
}

export default ItemDetail
