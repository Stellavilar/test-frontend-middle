import React from 'react';
import logo from '../img/logo.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            <div className="search">
                search input
            </div>
            <Link to="/cart">
                <div className="cart-icon">
                    <ShoppingCartIcon fontSize="large" />
                    Cart(0)
                </div>
            </Link>
        </header>
    );
};
