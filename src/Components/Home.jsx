import React, { Component } from 'react';
import CartButton from './CartButton';
import Categories from './Categories';
import SearchBar from './SearchBar';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  addToCart = (product) => {
    console.log('foi');
    const {
      id,
      price,
      title,
      thumbnail,
    } = product;
    const newItem = { id, price, title, thumbnail };
    this.setState((prevState) => ({
      cart: [...prevState.cart, newItem],
    }));
  }

  render() {
    const { cart } = this.state;
    console.log(cart);
    return (
      <div>
        <SearchBar addToCart={ this.addToCart } cart={ cart } />
        <Categories addToCart={ this.addToCart } cart={ cart } />
        <CartButton cart={ cart } />
      </div>
    );
  }
}
