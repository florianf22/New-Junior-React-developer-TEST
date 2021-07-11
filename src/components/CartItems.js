import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../actions';
import CartItem from './CartItem';
import { ListItemStyled, ListItemStyledMini } from '../styles/CartItemStyles';
import ProductsContext from '../contexts/ProductsContext';

class CartItems extends Component {
  static contextType = ProductsContext;

  isCompressed = (item, product) => {
    const { compressed } = this.props;

    if (compressed) {
      return (
        <ListItemStyledMini key={item}>
          <CartItem
            height="27px"
            width="27px"
            firstPicOnly
            key={item}
            {...product}
          />
        </ListItemStyledMini>
      );
    }

    if (!compressed) {
      return (
        <ListItemStyled key={item}>
          <CartItem {...product} />
        </ListItemStyled>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        {Object.keys(this.props.cart).map((item) => {
          const product = this.context.category.products.filter(
            (product) => product.id === item
          )[0];

          return this.isCompressed(item, product);
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, {
  addToCart,
})(CartItems);
