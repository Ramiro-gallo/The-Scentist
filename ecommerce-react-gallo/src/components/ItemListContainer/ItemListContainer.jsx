import React, { useEffect, useState} from 'react'
import { Flex, Grid } from '@chakra-ui/react'
import CategoriesDropdown from '../CategoriesDropdown/CategoriesDropdown'
import { getProducts, getProductsByCategory } from '../../data/asyncMock';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
import {BounceLoader} from 'react-spinners';

const ItemListContainer = () => {
  const [ products, setProducts ] = useState([]);
  const [ loading, setLoading] = useState([true]);


  const { categoryId } = useParams();

  useEffect(()=>{
    setLoading(true)
      const productData = categoryId ? getProductsByCategory(categoryId) : getProducts();

      productData
        .then((data) => setProducts(data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
  },[categoryId]);

  return (
    <Flex direction='column' alignItems="center" justify="center">
      <Grid
      text="center"
      justify="center"
      alignItems="center"
      templateRows='repeat(2, 1fr)'
      templateColumns='1fr'
      gap='4'  
      marginTop={'5rem'}>
        <CategoriesDropdown />
      </Grid>
      {
      loading ?
      <Flex justify={'center'} align={'center'} h={'50vh'}>  
        <BounceLoader color="#3B2A3C" />
      </Flex>
      :
      <Flex marginTop="5rem" w='90%'>
        <ItemList products={products} />
      </Flex>
      }
    </Flex>
  )
}

export default ItemListContainer
