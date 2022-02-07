import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../redux/actions';

import { SpanStyled, DivStyled, MainDivStyled } from './CartAttributesStyles';

class CartAttributes extends PureComponent {
  renderItem = (value, attrName, isSelected = true) => {
    return (
      <SpanStyled
        key={attrName}
        isSelected={isSelected}
        color={attrName === 'Color' ? value : null}
        height={this.props?.height}
        width={this.props?.width}
      >
        {attrName === 'Color' ? null : value}
      </SpanStyled>
    );
  };

  renderAttributes = () => {
    const { attributes, id, productAttributes } = this.props;

    if (!attributes) return null;

    return Object.values(productAttributes[id]).map((attr, i) => {
      return (
        <MainDivStyled key={i}>
          {attr.items.map((item, i) => {
            return (
              <DivStyled key={i}>
                {this.renderItem(
                  item.value,
                  attr.id,
                  item.value === attributes[attr.id],
                )}
              </DivStyled>
            );
          })}
        </MainDivStyled>
      );
    });
  };

  render() {
    return <>{this.renderAttributes()}</>;
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    productAttributes: state.selectedProductAttritubes,
  };
};

export default connect(mapStateToProps, { addToCart })(CartAttributes);
