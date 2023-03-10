import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const { cart } = props;
  // console.log(cart);

  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }

  const tax = parseFloat((total * 0.18).toFixed(2));

  const grandTotal = parseFloat((total + shipping + tax).toFixed(2));

  return (
    <div className='cart'>
      <h3>Order Summary</h3>
      <p>Total Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shiping Charge: ${shipping} </p>
      <p>Tax: ${tax} </p>
      <p className='grnd-total'>Grand Total: ${grandTotal} </p>
    </div>
  );
};


export default Cart;