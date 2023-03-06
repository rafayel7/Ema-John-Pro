import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './Product.css';

const Product = ({ handleAddToCart, product }) => {

  // const { handleAddToCart, product } = props;
  const { id, shipping, name, seller, price, ratings, img } = product;


  // console.log(props);

  return (
    <div className='product'>
      <img src={img} alt="" />

      <div className='product-details'>
        <p className='product-name'>{name}</p>
        <p className='product-price'>Price: ${price}</p>
        <p>Shipping Cost: ${shipping}</p>
        <p> <small> Seller: {seller}</small></p>
        <p> <small>Ratings: {ratings}</small></p>
      </div>

      <button onClick={() => handleAddToCart(product)} className='cart-btn'><span>Add to Cart</span>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>

    </div>
  );
};


export default Product;