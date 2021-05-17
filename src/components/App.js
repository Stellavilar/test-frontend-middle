import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import '../styles/index.scss';

import Header from './Header';
import List from './List';
import Details from './Details';
import Cart from './Cart';

function App() {
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
}

export default App;
