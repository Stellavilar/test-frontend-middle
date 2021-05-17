import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.punkapi.com/v2/';

const rootReactElement = () => {
  return (
    <App />
  );
};

const target = document.getElementById('root');
render(rootReactElement(), target);