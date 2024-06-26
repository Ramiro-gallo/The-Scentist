import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Flex,
    Heading,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Flex 
    className='navbar'
    position={'fixed'}
    top={'0'}
    zIndex={'999'}
    >
      <Heading fontSize={'larger'} className='logo-title'><Link to='/'>The Scentist</Link></Heading>
      <CartWidget />
    </Flex>
  )
}

export default NavBar
