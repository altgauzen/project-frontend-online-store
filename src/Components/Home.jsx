import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartButton from './CartButton';
import Categories from './Categories';
import SearchBar from './SearchBar';

export default class Home extends Component {
  render() {
    const { cart, addToCart } = this.props;
    return (
      <div>
        <SearchBar addToCart={ addToCart } cart={ cart } />
        <Categories addToCart={ addToCart } cart={ cart } />
        <CartButton cart={ cart } />
      </div>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.array).isRequired,
};
