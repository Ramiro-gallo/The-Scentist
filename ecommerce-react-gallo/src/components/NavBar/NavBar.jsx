import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { FaChevronDown } from "react-icons/fa";
import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Flex,
    Heading,
  } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <Flex 
    className='navbar'
    >
        <Menu>
              The Scentist
            <CartWidget />
        </Menu>
    </Flex>
  )
}

export default NavBar
