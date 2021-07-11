import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartAttributes from './CartAttributes';
import ImageSlider from './ImageSlider';

import { addToCart, updatetProductCard, deleteProductCart } from '../actions';

class CartItem extends Component {
  getProductPrice(prices) {
    return prices.filter((price) =>
      this.props.currency.includes(price.currency)
    )[0].amount;
  }

  onChangeQuantityClick = (opration) => {
    const { updatetProductCard, id, cart, deleteProductCart } = this.props;

    if (opration === 'increment')
      updatetProductCard(id, ++cart[id].quantity, cart[id].productProps);

    if (opration === 'decrement') {
      cart[id].quantity === 1
        ? deleteProductCart(id)
        : updatetProductCard(id, --cart[id].quantity, cart[id].productProps);
    }
  };

  render() {
    const { id, name, category, gallery, attributes, currency, prices, cart } =
      this.props;

    if (!cart[id]) return null;

    return (
      <React.Fragment>
        <section>
          <h3>{name}</h3>
          <h4>{category[0].toUpperCase() + category.slice(1)}</h4>
          <small>{currency[0] + this.getProductPrice(prices)}</small>
          <CartAttributes
            height={this.props?.height}
            width={this.props?.width}
            attributes={attributes}
            id={id}
          />
        </section>
        <section>
          <button onClick={() => this.onChangeQuantityClick('increment')}>
            +
          </button>
          <small>{cart[id]?.quantity}</small>
          <button onClick={() => this.onChangeQuantityClick('decrement')}>
            -
          </button>
        </section>
        {/* Image SLider returns section itself */}
        <ImageSlider gallery={gallery} firstPicOnly={this.props.firstPicOnly} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    currency: state.products.selectedCurrency,
  };
};

export default connect(mapStateToProps, {
  addToCart,
  updatetProductCard,
  deleteProductCart,
})(CartItem);
