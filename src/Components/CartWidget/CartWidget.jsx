import React from 'react';
//import './CartWidget';
//import Cart from '../../Assets/cart.svg';
import { useContext } from 'react';
import {CartContext} from '../../Context/CartContext'  
import {BsCart4} from 'react-icons/bs'; 
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

const CartWidget =()=>{
  const {totalQuantity} = useContext(CartContext);
  return(
      <Link to='/Cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
        <BsCart4 fontSize={'1.5rem'}  />
        <Badge bg="danger">{totalQuantity}</Badge>
      </Link>
  )
}
export default CartWidget;