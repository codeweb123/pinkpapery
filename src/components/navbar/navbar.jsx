import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/selectors/cart.selectors';
import CartIcon from '../cart-icon/cart-icon';
import Cart from '../cart/cart';
import Logo from  '../../assets/logo1.jpg';
import './navbar.styles.scss';

const Navbar = ({ hidden }) => (
    <div className='navbar'>
        <Link className='logo-container' to="/">
            <img src={Logo} className='logo' />
        </Link>
        <div className='companyname'>
            <h1>The Pink Papery</h1>
        </div>
        <div className='options'>
            <Link className='option' to='/'>
                HOME
            </Link>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/about'>
                ABOUT
            </Link>
            <Link className='option' to='/shipping'>
                SHIPPING
            </Link>
            <CartIcon />
        </div>
        {hidden ? null : <Cart />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden
  });
  
  export default connect(mapStateToProps)(Navbar);