import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Flex } from '@chakra-ui/react'
import { BounceLoader } from 'react-spinners';


const ItemDetailContainer = () => {
    const [ producto, setProducto ] = useState({});
    const [loading, setLoading] = useState(true);
    const { productId } = useParams(); 

    useEffect(() => {
        getProductById(productId)
            .then((data) => setProducto(data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    },[])

  return (
    <div>
      {
        loading ?
        <Flex justify={'center'} align={'center'} h={'50vh'}>  
          < BounceLoader color="#3B2A3C" />
        </Flex>
        :
        <ItemDetail {...producto} /> 
      }
    </div>
  )
}

export default ItemDetailContainer
