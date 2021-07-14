import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import ProductsContext from '../../contexts/ProductsContext';
import ProductCard from '../ProductCard/ProductCard';
import ProductListStyled from './ProductListStyles';

class ProductsList extends PureComponent {
  static contextType = ProductsContext;

  filterContextData = () => {
    if (this.props.category === 'all') return this.context.category.products;

    return this.context.category.products.filter(
      (product) => product.category === this.props.category
    );
  };

  renderList = (products) => {
    return products.map((product) => {
      return (
        <ProductCard
          navBarRef={this.props.navBarRef}
          {...product}
          key={product.id}
        >
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
