import React, { Component } from 'react';
import CartButton from './CartButton';
import Categories from './Categories';
import SearchBar from './SearchBar';

export default class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Categories />
        <CartButton />
      </div>
    );
  }
}
