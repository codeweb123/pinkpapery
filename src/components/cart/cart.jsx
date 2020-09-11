import React from 'react';
import { connect } from 'react-redux';
import Button from '../button/button';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.jsx'
import './cart.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

const Cart = ({ cartItems, history, dispatch }) => (
    <div className= 'cart'>
        <div className='cart-items'>
            {
                cartItems.length ? (
                cartItems.map(cartItem => ( 
                <CartItem key={cartItem.id} item={cartItem} />
            ))
            ) : (
                <span className='empty-message'> Your cart is empty </span>
            )}
            </div>
        <Button onClick ={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>
            Go To Checkout
        </Button>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default withRouter(connect(mapStateToProps)(Cart));

