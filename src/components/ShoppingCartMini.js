import React, { Component } from 'react';
import { connect } from 'react-redux';

import Wrapper from '../styles/ShoppingCardMiniStyles';
import ColorOverlay from '../ColorOverlay';
import CartItems from './CartItems';
import ButtonStyle from '../styles/ButtonStyle';
import LinkNoStyles from '../styles/LinkNoStyles';

class ShoppingCartMini extends Component {
  state = { open: false };

  countItemsInCart = () => {
    return Object.values(this.props.cart).filter((item) => item).length;
  };

  onCloseClick = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Wrapper open={this.state.open} itemsQuantity={this.countItemsInCart()}>
        <img
          onClick={() => this.setState({ open: !this.state.open })}
          src="img/icons/empty_cart.svg"
          alt="shopping cart svg icon"
        />
        {this.countItemsInCart() ? (
          <ul>
            <h6>
              My bag, <span>{this.countItemsInCart()} items</span>
            </h6>
            <CartItems compressed />
            <div>
              <LinkNoStyles to="/cart">
                <ButtonStyle
                  onClick={this.onCloseClick}
                  fontSize="0.7rem"
                  ghost
                  width="100%"
                >
                  View Bag
                </ButtonStyle>
              </LinkNoStyles>
              <LinkNoStyles to="/cart">
                <ButtonStyle
                  onClick={this.onCloseClick}
                  fontSize="0.7rem"
                  width="100%"
                >
                  Check Out
                </ButtonStyle>
              </LinkNoStyles>
            </div>
          </ul>
        ) : null}

        {this.state.open && this.countItemsInCart() ? (
          <ColorOverlay onClick={this.onCloseClick} />
        ) : null}
      </Wrapper>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(MapStateToProps)(ShoppingCartMini);
