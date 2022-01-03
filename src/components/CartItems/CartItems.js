import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../redux/actions';
import CartItem from '../CartItem/CartItem';
import { ListItemStyled, ListItemStyledMini } from './CartItemStyles';
import ProductsContext from '../../contexts/ProductsContext';

class CartItems extends PureComponent {
  static contextType = ProductsContext;

  renderList = (item, product) => {
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
      <div>
        {Object.keys(this.props.cart).map(item => {
          const product = this.context.category.products.filter(
            product => product.id === item,
          )[0];

          return this.renderList(item, product);
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
