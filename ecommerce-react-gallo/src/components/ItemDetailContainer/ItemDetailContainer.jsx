import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Flex } from '@chakra-ui/react'
import { BounceLoader } from 'react-spinners';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

const ItemDetailContainer = () => {
    const [ producto, setProducto ] = useState({});
    const [loading, setLoading] = useState(true);
    const { productId } = useParams(); 

    useEffect(() => {
      const getData = async () => {
        const queryRef = doc(db, 'productos', productId)

        const response = await getDoc(queryRef)


        const newItem = {
          ...response.data(),
          id: response.id,
        }
        console.log(newItem)
        setProducto(newItem)
        setLoading(false) 
      }

      getData()
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
