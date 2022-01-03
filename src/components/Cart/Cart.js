import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../redux/actions';
import MainStyled from './CartStyles';
import ProductsContext from '../../contexts/ProductsContext';
import ButtonStyled from '../../sharedStyles/ButtonStyle';
import CartItems from '../CartItems/CartItems';
import TotalSumLabel from '../TotalSumLabel/TotalSumLabel';

class Cart extends PureComponent {
  static contextType = ProductsContext;

  // next three functions are just alert your selected items
  turnProductIdToName = id => {
    return (
      id
        .split('-')
        .map(st => st[0].toUpperCase() + st.slice(1))
        .join(' ') + '\n'
    );
  };

  renderCartObjectsForAlert = () => {
    return Object.keys(this.props.cart).map((cartItem, idx) => {
      const cartValue = Object.values(this.props.cart)[idx];

      if (!cartValue) return null;

      return `${cartValue.quantity} ${this.turnProductIdToName(cartItem)}`;
    });
  };

  onProceedClick = () => {
    alert('You would have bought\n' + this.renderCartObjectsForAlert());
  };
  // Ending here

  render() {
    return (
      <MainStyled className="cart">
        <h2 className="cart-heading">Cart</h2>
        <ul>
          <CartItems />
        </ul>
        <TotalSumLabel />
        <ButtonStyled onClick={this.onProceedClick}>
          Proceed with the payment
        </ButtonStyled>
      </MainStyled>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    products: state.products,
  };
};

export default connect(mapStateToProps, {
  addToCart,
})(Cart);
