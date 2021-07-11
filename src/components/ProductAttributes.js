import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectProductProps, removeProductProps } from '../actions';
import DivStyled from '../styles/ProductAttributesStyles';
import SpanStyled from '../styles/ProductAttributesSpanStyles';

class ProductAttributes extends Component {
  componentDidMount() {
    // this.props.attributes.forEach((attribute) => {
    //   this.props.selectProductProps(attribute.name);
    // });
    this.props.selectProductProps(
      this.props.attributes.map((attr) => attr.name)
    );
  }

  componentWillUnmount() {
    this.props.removeProductProps();
  }

  onProductPropsChange = (attribute, idx) => {
    // selectProductProps reducer expects an array
    this.props.selectProductProps([attribute], idx);
  };

  renderAttributeItems = (attribute) => {
    return attribute.items.map((item, idx) => {
      return (
        <SpanStyled
          isSelected={
            this.props.productProps[attribute.name]?.attributeValue === idx
          }
          color={attribute.type === 'swatch' ? item.value : null}
          onClick={() => this.onProductPropsChange(attribute.name, idx)}
          key={item.id}
        >
          {attribute.type === 'swatch' ? null : item.value}
        </SpanStyled>
      );
    });
  };

  renderAttributes = () => {
    return this.props.attributes.map((attribute) => {
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

const mapStateToProps = (state) => {
  return {
    productProps: state.selectedProductProps,
  };
};

export default connect(mapStateToProps, {
  selectProductProps,
  removeProductProps,
})(ProductAttributes);
