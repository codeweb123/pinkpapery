import React from 'react';
import { Link } from 'react-router-dom';
import Logo from  '../../assets/logo1.jpg';
import './navbar.styles.scss';

const Navbar = () => (
    <div className='navbar'>
        <Link className='logo-container' to="/">
            <img src={Logo} className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
        </div>
    </div>
)

export default Navbar;