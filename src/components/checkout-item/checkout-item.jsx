import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/actions/cart/clearItem.js';
import Counter from '../likes/Counter.jsx';

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
      <Counter />
    </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
    <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
  </div>
);
  };

  const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
  });

  
  export default connect(null, mapDispatchToProps)(CheckoutItem);