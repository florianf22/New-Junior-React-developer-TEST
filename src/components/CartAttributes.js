import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../actions';

import SpanStyled from '../styles/CartAttributesStyles';

class CartAttributes extends Component {
  onProductsPropChangeClick = (idx) => {
    const { cart, id, attributes } = this.props;

    const chagnedProductProps = {
      ...cart[id].productProps,
      [attributes[0].name]: {
        attributeName: attributes[0].name,
        attributeValue: idx,
      },
    };

    this.props.addToCart(id, chagnedProductProps, cart[id].quantity);
  };

  renderItems = (items) => {
    const { cart, id, attributes } = this.props;
    const selectedValue =
      cart[id].productProps[attributes[0].name].attributeValue;

    return items.map((item, idx) => {
      return (
        <SpanStyled
          color={attributes[0].name === 'Color' ? item.value : null}
          isSelected={selectedValue === idx}
          onClick={() => this.onProductsPropChangeClick(idx)}
          height={this.props?.height}
          width={this.props?.width}
          key={item.id}
          className="attribute-span"
        >
          {attributes[0].name === 'Color' ? null : item.value}
        </SpanStyled>
      );
    });
  };

  renderAttributes = () => {
    const { attributes } = this.props;

    if (!attributes || attributes.length === 0) return null;

    return <div>{this.renderItems(attributes[0].items)}</div>;
  };

  render() {
    return <div style={{ minWidth: '175px' }}>{this.renderAttributes()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { addToCart })(CartAttributes);
