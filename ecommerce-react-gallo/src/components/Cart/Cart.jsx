import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Context from '../../context/CartContext'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(Context); 

  return (
    <TableContainer>
        <Table variant='simple'>
            <TableCaption>Shopping Cart</TableCaption>
            <Thead>
                <Tr>
                    <Th>Product</Th>
                    <Th>Amount</Th>
                    <Th>Price</Th>
                    <Th>Subtotal</Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    cart.map((prod) => (
                        <Tr key={prod.id}>
                            <Td>{prod.name}</Td>
                            <Td>{prod.quantity}</Td>
                            <Td>{prod.price}</Td>
                            <Td>{prod.price * prod.quantity}</Td>
                            <Td>
                                <Button onClick={() => removeItem(prod.id)}>
                                    < MdDeleteOutline />
                                </Button>
                            </Td>
                        </Tr>
                    ))
                }
            </Tbody>
            <Tfoot>
                <Tr>
                    <Th>
                        <Button onClick={() => clearCart()}>
                            <Text>Clear Cart</Text>                            
                        </Button>
                    </Th>
                </Tr>
            </Tfoot>
        </Table>
    </TableContainer>
  )
}

export default Cart
