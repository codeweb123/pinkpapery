import React from 'react';
import { connect } from 'react-redux';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item.jsx'
import './cart.styles.scss';

const Cart = ({ cartItems }) => (
    <div className= 'cart'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => ( 
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
            </div>
        <Button>Go To Checkout</Button>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(Cart);

