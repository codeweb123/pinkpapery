import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import Cart from '../cart/cart';
import Logo from  '../../assets/logo1.jpg';
import './navbar.styles.scss';

const Navbar = ({ currentUser, hidden }) => (
    <div className='navbar'>
        <Link className='logo-container' to="/">
            <img src={Logo} className='logo' />
        </Link>
        <div className='companyname'>
            <h1>The Pink Papery</h1>
        </div>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            <CartIcon />
        </div>
        {hidden ? null : <Cart />}
    </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
  });
  
  export default connect(mapStateToProps)(Navbar);