import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import DivStyled from './CategoryStyles';
import { setCategory } from '../../redux/actions';

class Category extends PureComponent {
  render() {
    const { selectedCategory } = this.props.products;

    return (
      <DivStyled>
        <h2 className="category-heading">
          {selectedCategory[0].toUpperCase() + selectedCategory.slice(1)}{' '}
          {selectedCategory === 'all' ? 'products' : ''}
        </h2>
      </DivStyled>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(MapStateToProps, { setCategory })(Category);
