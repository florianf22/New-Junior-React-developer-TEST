import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../redux/actions';
import CartItem from '../CartItem/CartItem';
import { ListItemStyled, ListItemStyledMini } from './CartItemStyles';
import ProductsContext from '../../contexts/ProductsContext';

class CartItems extends PureComponent {
  static contextType = ProductsContext;

  renderList = (cartItem, product, idx) => {
    const { compressed } = this.props;

    if (compressed) {
      return (
        <ListItemStyledMini key={idx}>
          <CartItem
            height="27px"
            width="27px"
            firstPicOnly
            cartItem={cartItem}
            {...product}
          />
        </ListItemStyledMini>
      );
    }

    if (!compressed) {
      return (
        <ListItemStyled key={idx}>
          <CartItem {...product} cartItem={cartItem} />
        </ListItemStyled>
      );
    }
  };

  render() {
    return (
      <div>
        {this.props.cart.map((cartItem, idx) => {
          const product = this.context.category.products.filter(
            product => product.id === cartItem.productId,
          )[0];

          return this.renderList(cartItem, product, idx);
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, {
  addToCart,
})(CartItems);
