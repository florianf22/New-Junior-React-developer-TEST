import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../redux/actions';
import ProductsContext from '../../contexts/ProductsContext';
import { HeadingStyled, DivStyled } from './TotalSumLabelStyles';

class TotalSumLabel extends PureComponent {
  static contextType = ProductsContext;

  calculateTotalPrice = () => {
    let totalPrice = 0;
    Object.keys(this.props.cart).forEach(cartItem => {
      const price = this.context.category.products
        .find(p => p.id === cartItem)
        .prices.find(
          pr =>
            pr.currency.label === this.props.products.selectedCurrency.slice(2),
        ).amount;
      totalPrice +=
        Math.round(price) * (this.props.cart[cartItem]?.quantity || 0);
    });
    return totalPrice;
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
        <h3 className="totalSum" compressed>
          Total
        </h3>
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
