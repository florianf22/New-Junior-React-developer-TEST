import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import DivStyled from './ShoppingCardMiniStyles';
import ColorOverlay from '../ColorOverlay/ColorOverlay';
import CartItems from '../CartItems/CartItems';
import ButtonStyled from '../../sharedStyles/ButtonStyle';
import LinkNoStyles from '../../sharedStyles/LinkNoStyles';
import { toggleCartPopup } from '../../redux/actions';

class ShoppingCartMini extends PureComponent {
  countItemsInCart = () => {
    return Object.values(this.props.cart).filter((item) => item).length;
  };

  onTogglePopupClick = () => {
    this.props.toggleCartPopup();
  };

  render() {
    return (
      <DivStyled
        open={this.props.cartPopupShown}
        itemsQuantity={this.countItemsInCart()}
      >
        <img
          onClick={this.onTogglePopupClick}
          src="img/icons/empty_cart.svg"
          alt="shopping cart svg icon"
        />
        {this.countItemsInCart() ? (
          <ul>
            <h6>
              My bag, <span>{this.countItemsInCart()} items</span>
            </h6>
            <CartItems compressed />
            <aside>
              <LinkNoStyles to="/cart">
                <ButtonStyled
                  onClick={this.onTogglePopupClick}
                  fontSize="0.7rem"
                  ghost
                  width="100%"
                >
                  View Bag
                </ButtonStyled>
              </LinkNoStyles>
              <LinkNoStyles to="/cart">
                <ButtonStyled
                  onClick={this.onTogglePopupClick}
                  fontSize="0.7rem"
                  width="100%"
                >
                  Check Out
                </ButtonStyled>
              </LinkNoStyles>
            </aside>
          </ul>
        ) : null}

        {this.props.cartPopupShown && this.countItemsInCart() ? (
          <ColorOverlay onClick={this.onTogglePopupClick} />
        ) : null}
      </DivStyled>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    cart: state.cart,
    cartPopupShown: state.cartPopupShown.status,
  };
};

export default connect(MapStateToProps, { toggleCartPopup })(ShoppingCartMini);
