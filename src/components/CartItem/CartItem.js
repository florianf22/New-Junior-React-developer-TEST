import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import CartAttributes from '../CartAttributes/CartAttributes';
import ImageSlider from '../ImageSlider/ImageSlider';

import {
  addToCart,
  updatetProductCard,
  deleteProductCart,
} from '../../redux/actions';

class CartItem extends PureComponent {
  getProductPrice(prices) {
    return prices.filter(price =>
      this.props.currency.includes(price.currency.label),
    )[0].amount;
  }

  onChangeQuantityClick = operation => {
    const { updatetProductCard, id, deleteProductCart, cartItem } = this.props;

    if (operation === 'increment')
      updatetProductCard(id, cartItem.attributeNames, cartItem.quantity + 1);

    if (operation === 'decrement') {
      cartItem.quantity === 1
        ? deleteProductCart(id, cartItem.attributeNames)
        : updatetProductCard(
            id,
            cartItem.attributeNames,
            cartItem.quantity - 1,
          );
    }
  };

  render() {
    const { id, name, category, gallery, currency, prices, cartItem } =
      this.props;

    return (
      <React.Fragment>
        <section>
          <h3 className="cartItem-heading">{name}</h3>
          <h4 className="cartItem-subheading">
            {category[0].toUpperCase() + category.slice(1)}
          </h4>
          <small>{currency[0] + this.getProductPrice(prices)}</small>
          <CartAttributes
            height={this.props?.height}
            width={this.props?.width}
            attributes={cartItem.attributeNames}
            id={id}
          />
        </section>
        <section>
          <button onClick={() => this.onChangeQuantityClick('increment')}>
            +
          </button>
          <small>{cartItem.quantity}</small>
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

const mapStateToProps = state => {
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
