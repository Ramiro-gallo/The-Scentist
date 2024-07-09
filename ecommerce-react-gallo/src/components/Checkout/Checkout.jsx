import React, { useContext, useState } from 'react'
import Context from '../../context/CartContext'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Flex,
    Heading,
    Button,
    Center
} from '@chakra-ui/react'
import Swal from 'sweetalert2'

import { collection, Timestamp, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { useNavigate } from 'react-router-dom'


const Checkout = () => {
    const [ user, setUser] = useState({
        name: '',
        email: '',
        confirmEmail: '',
        phone: '',
    }) 

    const [ error, setError ] = useState({})
    
    const [ loading, setLoading ] = useState(false) 
    
    const { cart, getTotal, clearCart } = useContext(Context)
    
    const navigate = useNavigate()

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        const errors = {}

        if(!user.name){
            errors.name = 'In order to place your order, you need to enter your name!'
        } else if (user.name.length < 5) {
            errors.name = 'Please enter your full name!'
        } 

        if(!user.email){
            errors.email = 'In order to place your order, you need to enter your Email address!'
        } else if(!/\S+@\S+\.\S+/.test(user.email)){
            errors.email = 'Invalid Email address! Please enter a valid one.'
        }

        if(!user.confirmEmail){
            errors.confirmEmail = 'In order to place your order, you need to confirm your Email address!'
        } else if(user.confirmEmail != user.email) {
            errors.confirmEmail = 'Your Email confirmation doesn´t match your Email!'
        }

        if(!user.phone){
            errors.phone = 'In order to place your order, you need to enter your phone number!'
        } else if(user.phone.length < 10 || !/^[0-9]*$/.test(user.phone)){
            errors.phone = 'In order to place your order, please enter a valid phone number!'
        }

        setError(errors)
        return Object.keys(errors).length === 0
    }
    
    const getOrder = async () => {
        
        if(!validateForm()){
            return
        }
        
        if(cart.length === 0){
            Swal.fire({
                title: "No items added!",
                text: `In order to place an order, you need to select items and add them to your cart.`,
                icon: 'error',
                confirmButtonText: `Understood!`
              }).then(() => {
                navigate('/')
              });
            return
        }

        const coleccion = collection(db, 'orders')
        
        try {

            for (const item of cart){
                const docRef = doc(db,'productos', item.id)
                const productDoc = await getDoc(docRef)

                const currentStock = productDoc.data().stock

                if(currentStock >= item.quantity) {
                    await updateDoc(docRef,{
                        stock: currentStock - item.quantity
                    })
                } else {
                    Swal.fire({
                        title: "Not enough stock!",
                        text: `Sadly, we don't have that many ${item.name}.`,
                        icon: 'error',
                        confirmButtonText: `Understood!`
                      }).then(() => {
                        navigate('/')
                      });
        
                }
            }

            const order = {
                buyer: user,
                cart: cart,
                total: getTotal(),
                date: Timestamp.now()
            }

            const orderRef = await addDoc(coleccion, order)

            Swal.fire({
                title: "Your order has been confirmed!",
                text: `Order id: ${orderRef.id}`,
                icon: 'success',
                confirmButtonText: `Understood!`
              }).then(() => {
                clearCart()
                navigate('/')
              });

        } catch (error) {
            console.log(error)
        }
    }


  return (
    <Flex
        flexDirection='column'
        alignItems='center'
        width='60%'
        margin='5rem auto'
    >
        <Heading
        margin='0 0 2rem 0'
        >Checkout form</Heading>  
        <FormControl isInvalid={Object.keys(error).length > 0}>
            <FormLabel>Name</FormLabel>
            <Input 
                type='text'
                name='name'
                placeholder='John Doe'
                onChange={updateUser}
            />
            <FormErrorMessage> 
                {error.name}
            </FormErrorMessage>
            <FormLabel>Email address</FormLabel>
            <Input 
                type='email'
                name='email'
                placeholder='Johndoe01@gmail.com'
                onChange={updateUser}
            />
            <FormErrorMessage>            
                {error.email}
            </FormErrorMessage>
            <FormLabel>Confirm Email address</FormLabel>
            <Input 
                type='email'
                name='confirmEmail'
                placeholder='Johndoe01@gmail.com'
                onChange={updateUser}
            />
            <FormErrorMessage>            
                {error.confirmEmail}
            </FormErrorMessage>
            <FormLabel>Phone number</FormLabel>
            <Input 
                type='tel'
                name='phone'
                placeholder='11 2233-4455'
                onChange={updateUser}
            />
            <FormErrorMessage>           
                {error.phone}
            </FormErrorMessage> 
            <Center mt='2rem'>
                <Button
                onClick={getOrder}
                _hover={{
                    color: 'green',
                }}>
                    Checkout
                </Button>
            </Center>
        </FormControl>
    </Flex>
  )
}

export default Checkout
