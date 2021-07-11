import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductsContext from '../contexts/ProductsContext';
import ProductCard from './ProductCard';
import ProductListStyled from '../styles/ProductListStyles';

class ProductsList extends Component {
  static contextType = ProductsContext;

  filterContextData = () => {
    return this.context.category.products.filter(
      (product) => product.category === this.props.category
    );
  };

  renderList = (products) => {
    return products.map((product) => {
      return (
        <ProductCard history={this.props.history} {...product} key={product.id}>
          {product.name}
        </ProductCard>
      );
    });
  };

  render() {
    const products = this.filterContextData();

    return <ProductListStyled>{this.renderList(products)}</ProductListStyled>;
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.products.selectedCategory,
  };
};

export default connect(mapStateToProps)(ProductsList);
