import React, {useState} from 'react'; 
import{ Button } from 'react-bootstrap'

const ItemCount = ({stock, onAdd, initial}) => {
  const [count,setCount]= useState(initial)
  
  const increment = () => {
    if (count < stock){
      setCount(count + 1)
    }
  }
  const decrement = () => {
    if(count > 0){
    setCount(count- 1)
  }
  }
  
  return (
    <div className='d-flex flex-column align-items-center justify-content-between'>
      <div>
        <Button variant ='dark' onClick={increment}>+</Button>
        <span className='btn'>{count}</span>
        <Button variant ='dark' onClick={decrement}>-</Button>
      </div>
      <Button className='mt-2' variant ='dark' disabled={count===0 && stock===0} onClick={()=>onAdd(count)}>Agregar al Carrito</Button>
    </div>
  )
}

export default ItemCount;
