import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../actions';
import MainStyled from '../styles/CartStyles';
import ProductsContext from '../contexts/ProductsContext';
import ButtonStyled from '../styles/ButtonStyle';
import CartItems from './CartItems';

class Cart extends Component {
  static contextType = ProductsContext;

  // next three functions are just alert your selected items
  turnProductIdToName = (id) => {
    return (
      id
        .split('-')
        .map((st) => st[0].toUpperCase() + st.slice(1))
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
      <MainStyled>
        <h2>Cart</h2>
        <ul>
          <CartItems />
        </ul>
        <ButtonStyled onClick={this.onProceedClick}>
          Proceed with the payment
        </ButtonStyled>
      </MainStyled>
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
})(Cart);
