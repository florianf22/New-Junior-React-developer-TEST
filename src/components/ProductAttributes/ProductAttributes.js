import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { selectProductProps, removeProductProps } from '../../redux/actions';
import DivStyled from './ProductAttributesStyles';
import SpanStyled from './ProductAttributesSpanStyles';

class ProductAttributes extends PureComponent {
  componentDidMount() {
    this.props.attributes.forEach(attr => {
      this.props.selectProductProps([attr.name], attr.items[1].value);
    });
  }

  componentWillUnmount() {
    this.props.removeProductProps();
  }

  onProductPropsChange = (attribute, val) => {
    // selectProductProps reducer expects an array
    this.props.selectProductProps([attribute], val);
  };

  renderAttributeItems = attribute => {
    return attribute.items.map(item => {
      return (
        <SpanStyled
          isSelected={this.props.productProps[attribute.name] === item.value}
          color={attribute.type === 'swatch' ? item.value : null}
          onClick={() => this.onProductPropsChange(attribute.name, item.value)}
          key={item.id}
        >
          {attribute.type === 'swatch' ? null : item.value}
        </SpanStyled>
      );
    });
  };

  renderAttributes = () => {
    return this.props.attributes.map(attribute => {
      return (
        <section key={attribute.name}>
          <h4>{attribute.name}:</h4>
          <div>{this.renderAttributeItems(attribute)}</div>
        </section>
      );
    });
  };

  render() {
    return <DivStyled>{this.renderAttributes()}</DivStyled>;
  }
}

const mapStateToProps = state => {
  return {
    productProps: state.selectedProductProps,
  };
};

export default connect(mapStateToProps, {
  selectProductProps,
  removeProductProps,
})(ProductAttributes);
