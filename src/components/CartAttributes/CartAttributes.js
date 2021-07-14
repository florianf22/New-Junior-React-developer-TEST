import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../redux/actions';

import { SpanStyled, DivStyled } from './CartAttributesStyles';

class CartAttributes extends PureComponent {
  renderItem = (items, attrName) => {
    const { cart, id, attributes } = this.props;
    const selectedValue = cart[id].attributeNames[attrName];

    return (
      <SpanStyled
        key={attrName}
        isSelected
        color={attrName === 'Color' ? items[selectedValue].value : null}
        height={this.props?.height}
        width={this.props?.width}
      >
        {attrName === 'Color' ? null : items[selectedValue].value}
      </SpanStyled>
    );
  };

  renderAttributes = () => {
    const { attributes } = this.props;

    if (!attributes || attributes.length === 0) return null;

    return attributes.map((attr) => {
      return (
        // if someone passess down height means that minified versions should be display
        <DivStyled key={attr.name} compressed={this.props?.height}>
          <h3 className="attributes--heading">{attr.name}:</h3>
          {this.renderItem(attr.items, attr.name)}
        </DivStyled>
      );
    });
  };

  render() {
    return <div>{this.renderAttributes()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { addToCart })(CartAttributes);
