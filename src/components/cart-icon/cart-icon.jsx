import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/actions/cart/carthidden.js';
import { selectCartItemsCount } from '../../redux/selectors/cart.selectors';
import { ReactComponent as ShoppingCart } from '../../assets/shoppingcart.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingCart className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});
//selector displays cart item count
//display as itemCount as a prop on the component.

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
