import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../redux/actions';

import { SpanStyled, DivStyled, MainDivStyled } from './CartAttributesStyles';

class CartAttributes extends PureComponent {
  renderItem = (value, attrName) => {
    return (
      <SpanStyled
        key={attrName}
        isSelected
        color={attrName === 'Color' ? value : null}
        height={this.props?.height}
        width={this.props?.width}
      >
        {attrName === 'Color' ? null : value}
      </SpanStyled>
    );
  };

  renderAttributes = () => {
    const { attributes } = this.props;

    if (!attributes) return null;

    return Object.keys(attributes).map(attr => {
      return (
        // if someone passess down height means that minified versions should be display
        <DivStyled key={attr.name} compressed={this.props?.height}>
          {this.renderItem(attributes[attr], attr)}
        </DivStyled>
      );
    });
  };

  render() {
    return <MainDivStyled>{this.renderAttributes()}</MainDivStyled>;
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { addToCart })(CartAttributes);
