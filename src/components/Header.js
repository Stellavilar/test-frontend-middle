import React from 'react';
import logo from '../img/logo.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Search from './Search';

export default function Header() {
    //Get array with cart contents stored into localStorage
    const { cartContents } = useCart();

    return (
        <header>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            <div className="search">
                <Search />
            </div>
            <Link to="/cart">
                <div className="cart-icon">
                    <ShoppingCartIcon fontSize="large" />
                    Cart ({ cartContents.length})
                </div>
            </Link>
        </header>
    );
};
