import React from 'react'
import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box
} from '@chakra-ui/react'
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CategoriesDropdown = () => {
  return (
    <Box>
        <Menu>
            <MenuButton className='navbar-dropdown' as={Button} rightIcon={<FaChevronDown />}>
                Find your Fragrance
            </MenuButton>
            <MenuList>
                <MenuItem className='menu-item'>
                    <Link to='/categories/Men'>Fragrances For Him</Link>
                </MenuItem>
                <MenuItem className='menu-item'>
                    <Link to='/categories/Women'>Fragrances For Her</Link>
                </MenuItem>
                <MenuItem className='menu-item'>
                    <Link to='/categories/Unisex'>Fragrances For Them</Link>
                </MenuItem>
                <MenuItem className='menu-item'>
                    <Link to='/categories/Decants'>Fragrance Decants</Link>
                </MenuItem>
            </MenuList>
        </Menu>
    </Box>
  )
}

export default CategoriesDropdown
