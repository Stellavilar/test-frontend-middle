import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import axios from 'axios';
import { CartProvider } from'./context/CartContext';

axios.defaults.baseURL = 'https://api.punkapi.com/v2/';

const rootReactElement = () => {
  return (
    <CartProvider>
      <App />
    </CartProvider>
    
  );
};

const target = document.getElementById('root');
render(rootReactElement(), target);