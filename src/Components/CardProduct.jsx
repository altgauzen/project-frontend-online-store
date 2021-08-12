import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class CardProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      click: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleClick();
  }

  async handleClick(event) {
    const product = await getProductsFromCategoryAndQuery(event.target.id, '');
    this.setState({
      item: product.results,
      click: true,
    });
  }

  render() {
    const { products } = this.props;
    const { title, thumbnail, price, id } = products;
    const { item } = this.state;
    console.log(item);
    return (
      <div>
        <div data-testid="product">
          <h3>{ title }</h3>
          <p>{ price }</p>
          <img src={ thumbnail } alt="foto" />
        </div>
        <Link
          to={ { pathname: `/product-details/${id}`, state: products } }
          data-testid="product-detail-link"
        >
          Detalhes
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

CardProduct.propTypes = {
  products: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
