import React,{useEffect,useState} from 'react'
//import { getItem } from '../../Mock/mock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { doc, getDoc } from 'firebase/firestore'
import {db} from '../../Config/firebase'

const ItemDetailContainer = () => {
  const [prod,setProd]= useState(null)
  const [setLoader] = useState(true)
  //loader,
  const {id}=useParams()

 
 useEffect(()=>{
    setLoader(true)
    //const collectionProd = collection(db,"products")
    const docRef = doc(db, 'products', id)

    getDoc(docRef)
      .then(res => {
        const data = res.data()
        const productAddapted= {id: res.id, ...data}
        setProd(productAddapted)
      }) 
      .catch(error => {
        console.log(error)
      })
      .finally(()=>{
        setLoader(false)
      })
}, [id])

  return (
    <div>
      <ItemDetail prod={prod}/>
    </div>
  )
}

export default ItemDetailContainer;
