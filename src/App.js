import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Home from './Components/Home';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/carrinho" component={ ShoppingCart } />
          <Route exact path="/product-details/:id" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    );
  }
}
