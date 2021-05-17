import React from 'react';
import logo from '../img/logo.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Header() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <div className="search">
                search input
            </div>
            <div className="cart-icon">
                <ShoppingCartIcon fontSize="large" />
                Cart(0)
            </div>
        </header>
    );
};
