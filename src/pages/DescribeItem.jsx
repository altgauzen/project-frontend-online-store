import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class DescribeItem extends Component {
  render() {
    const { title, thumbnail, price, attributes } = this.props.location.state;
    return (
      <div>
        <h4 data-testid="product-detail-name">{ title }</h4>
        <h4>{ `Preço: ${price}` }</h4>
        <img src={ thumbnail } alt={ `imagem do ${title}` } />
        <ul>
          {attributes.map((att) => (
            <li key={ att.id }>
              {`${att.name}: ${att.value_name}`}
            </li>
          ))}
        </ul>
        <Link to="/carrinho">Carrinho</Link>
      </div>
    );
  }
}

DescribeItem.propTypes = {
  state: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    attributes: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      value_name: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
