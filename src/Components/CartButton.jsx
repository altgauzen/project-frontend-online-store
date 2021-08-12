import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CartButton extends Component {
  render() {
    const { cart } = this.props;
    return (
      <Link
        to={ { pathname: `/carrinho`, cart: cart } }
        data-testid="shopping-cart-button"
      >
        Carrinho
      </Link>
    );
  }
}
