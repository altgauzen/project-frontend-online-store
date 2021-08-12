import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends Component {
  render() {
    const { location } = this.props;
    const { cart } = location;
    return (
      <div>
        {cart.map((car) => (
          <div key={ car.id }>
            <p data-testid="shopping-cart-product-name">{car.title}</p>
            <p data-testid="shopping-cart-product-quantity">1</p>
          </div>
        ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.arrayOf(PropTypes.array).isRequired,
};
