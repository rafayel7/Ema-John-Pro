import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const { cart } = props;

  return (
    <div>
      <h3>Order Summary</h3>
      <p>Total Items: {cart.length}</p>
    </div>
  );
};


export default Cart;