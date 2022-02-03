import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../redux/actions';
import ProductsContext from '../../contexts/ProductsContext';
import { HeadingStyled, DivStyled } from './TotalSumLabelStyles';

class TotalSumLabel extends PureComponent {
  static contextType = ProductsContext;

  calculateTotalPrice = () => {
    const { products } = this.context.category;
    let totalPrice = 0;

    this.props.cart.forEach(cartItem => {
      totalPrice +=
        cartItem.quantity *
        products
          .find(pro => pro.id === cartItem.productId)
          .prices.find(
            price =>
              price.currency.label ===
              this.props.products.selectedCurrency.slice(2),
          ).amount;
    });

    return totalPrice.toFixed(2);
  };

  render() {
    if (!this.props.compressed)
      return (
        <HeadingStyled className="totalSum" compressed>
          Total {this.calculateTotalPrice()}{' '}
          {this.props.products.selectedCurrency.slice(0, 1)}
        </HeadingStyled>
      );

    return (
      <DivStyled>
        <h3 className="totalSum">Total</h3>
        <h3 className="totalSum">
          {this.props.products.selectedCurrency.slice(0, 1)}{' '}
          {this.calculateTotalPrice()}
        </h3>
      </DivStyled>
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
})(TotalSumLabel);
