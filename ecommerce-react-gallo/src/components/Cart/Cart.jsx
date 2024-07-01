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
    Flex,
    Button,
    Text
} from '@chakra-ui/react'
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeItem, clearCart, getTotal } = useContext(Context); 

    if(cart.length === 0) {
        return (
            <Flex
                justify={'center'}
                align={'center'}
                direction={'column'}
            >
                <Text>
                    Oops! Your cart seems to be empty. 
                </Text>
                <Button>
                    <Link to='/'>Shop fragrances</Link>
                </Button>
            </Flex>
        )
    } else {
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
                                    <Td>${prod.price}</Td>
                                    <Td>${prod.price * prod.quantity}</Td>
                                    <Td>
                                        <Button 
                                        _hover={{ 
                                            color: "red",
                                        }}
                                        
                                        onClick={() => removeItem(prod.id)}>
                                            < MdDeleteOutline />
                                        </Button>
                                    </Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Total:</Th>
                            <Th></Th>
                            <Th></Th>
                            <Th>
                                <Text> ${getTotal()} </Text>
                            </Th>
                            <Th>
                                <Button
                                _hover={{ 
                                    color: "red",
                                }} 
                                onClick={() => clearCart()}>
                                    <Text>Clear Cart</Text>                            
                                </Button>
                            </Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            )
        }
}
export default Cart
