import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Flex } from '@chakra-ui/react'
import { BounceLoader } from 'react-spinners';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import Context from '../../context/CartContext';


const ItemDetailContainer = () => {
    const { currentQuantity } = useContext(Context);

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
        <ItemDetail {...producto} currentQuantity={currentQuantity(productId)} /> 
      }
    </div>
  )
}

export default ItemDetailContainer
