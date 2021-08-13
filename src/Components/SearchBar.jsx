import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';

export default class SearchBar extends Component {
  render() {
    const {
      products,
      searchText,
      state,
      handleChange,
      handleClick,
      addToCart,
    } = this.props;
    // console.log(results);
    // if (done) return 'Nenhum produto foi encontrado';
    console.log(products);
    return (
      <div>
        <form>
          <label
            htmlFor="pesquisar"
          >
            <input
              type="text"
              data-testid="query-input"
              id="pesquisar"
              name="searchText"
              value={ searchText }
              onChange={ handleChange }
            />
            <br />
            <button
              type="button"
              data-testid="query-button"
              onClick={ handleClick }
            >
              Pesquisar
            </button>
          </label>
        </form>
        <div>
          {products === 0 && state === true
            ? <p>Nenhum produto foi encontrado</p>
            : products.map((product, { id }) => (
              <CardProduct
                key={ id }
                products={ product }
                addToCart={ addToCart }
              />
            ))}
        </div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </div>
    );
  }
}

SearchBar.propTypes = {
  addToCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.array).isRequired,
  state: PropTypes.bool.isRequired,
  searchText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
