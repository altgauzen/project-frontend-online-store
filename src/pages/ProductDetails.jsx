import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartButton from '../Components/CartButton';

export default class ProductDetails extends Component {
  render() {
    const { location, addToCart, cart } = this.props;
    const { title, thumbnail, price, attributes } = location.state;
    return (
      <div>
        <h4 data-testid="product-detail-name">{ title }</h4>
        <h4>{ `Preço: ${price}` }</h4>
        <img src={ thumbnail } alt={ `imagem do ${title}` } />
        <ul>
          { attributes.map((att) => (
            <li key={ att.id }>
              {`${att.name}: ${att.value_name}`}
            </li>
          ))}
        </ul>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addToCart(location.state) }
        >
          Adicionar ao Carrinho
        </button>
        <Link to="/">Voltar</Link>
        <CartButton cart={ cart } />
        <form>
          <label htmlFor="input-name">
            Nota:
            <input type="number" className="input-name" min="1" max="5" required />
          </label>
          <label htmlFor="input-textArea">
            Mensagem:
            <input
              className="input-textArea"
              type="textArea"
              data-testid="product-detail-evaluation"
              placeholder="opcional"
            />
          </label>
        </form>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      attributes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          value_name: PropTypes.string,
        }),
      ),
    }),
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.array).isRequired,
};
