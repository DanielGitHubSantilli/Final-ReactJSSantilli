import React from 'react';

const CartItem = ({item}) => {
  return(
    <div className='d-flex justify-content-around align-items-center'>
      <img src={item.img} alt={item.name} with={'150rem'}/>
      <p>{item.name}</p>
      <p>${item.price}</p>
      <p>{item.quantity}</p>
      <p>Sub total: ${item.quantity * item.price}</p>
      CartItem
    </div>
  )
}

export default CartItem;