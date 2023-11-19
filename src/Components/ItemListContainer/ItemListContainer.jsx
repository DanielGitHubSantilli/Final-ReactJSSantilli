import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../../Config/firebase"

const ItemListContainer = ({greeting}) =>{
  const [prod,setProd]=useState([])
  const [loading,setLoading] = useState(true)
  
  const {CategoryId}= useParams()
  
  useEffect(() => {
    setLoading(true)

    const collectionRef = CategoryId
    ? query(collection(db,'products'), where('category',"==",CategoryId))
    : collection(db,"products")

    getDocs(collectionRef)
      .then(response => {
        const productsAddapted = response.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProd(productsAddapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(()=>{
      setLoading(false)
      })
    }, [CategoryId])
    return (  
      <div>
        {
        loading ? <p>Cargando...</p>
        :<div>
          <h1>{greeting} <span>{CategoryId && CategoryId}</span></h1>
          <ItemList prod={prod}/>
        
        </div>
        }
      </div>
    )
  }
  export default ItemListContainer;
  
  