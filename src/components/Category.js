import React, { Component } from 'react';
import { connect } from 'react-redux';

import DivStyled from '../styles/CategoryStyles';
import { setSubCategory, setCategory } from '../actions';

class Category extends Component {
  onCategoryChangeClick = () => {
    const { selectedCategory } = this.props.products;

    if (selectedCategory === 'clothes') {
      this.props.setSubCategory('Apple');
      this.props.setCategory('tech');
    } else {
      this.props.setSubCategory('Women');
      this.props.setCategory('clothes');
    }
  };

  render() {
    const { selectedCategory } = this.props.products;

    return (
      <DivStyled>
        <h2>
          {selectedCategory[0].toUpperCase() + selectedCategory.slice(1)} store
        </h2>
        <h3>
          Check out our{' '}
          <span>{selectedCategory === 'clothes' ? 'tech' : 'clothes'}</span>{' '}
          store
          <small onClick={this.onCategoryChangeClick}> here.</small>
        </h3>
      </DivStyled>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(MapStateToProps, { setSubCategory, setCategory })(
  Category
);
