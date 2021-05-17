import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import { useParams} from 'react-router';
// import axios from 'axios';
import '../styles/index.scss';
//Import components
import Header from './Header';
import List from './List';
import Details from './Details';
import Cart from './Cart';

export default function App() {
  
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <List />
      </Route>
      <Route exact path="/details/:id">
        <Details />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </Router>
  );
};

