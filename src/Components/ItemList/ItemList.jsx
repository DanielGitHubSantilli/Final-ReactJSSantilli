import React from 'react'
import Item from '../Item/Item'

const ItemList = ({prod}) => {
  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap'>
      {prod.map((productos)=> <Item key={productos.id} prod ={productos} />)}
    </div>
  )
}

export default ItemList
