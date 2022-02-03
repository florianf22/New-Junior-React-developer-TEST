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

  onProceedClick = () => {
    alert('You would have bought products listed in the cart 🙄');
  };

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
