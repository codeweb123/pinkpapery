import React from 'react';
import Button from '../button/button';
import './cart.styles.scss';

const Cart = () => (
    <div className= 'cart'>
        <div className='cart-items' />
        <Button>Go To Checkout</Button>
    </div>
)

export default Cart;

