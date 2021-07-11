import React, { Component } from 'react';
import ProductsContext from '../contexts/ProductsContext';
import { connect } from 'react-redux';

import MainStyled from '../styles/ProductStyles';
import ButtonStyled from '../styles/ButtonStyle';
import ProductAttributes from './ProductAttributes';
import { addToCart } from '../actions';
import { deleteProductCart } from '../actions';

class Product extends Component {
  static contextType = ProductsContext;
  state = { product: null, pictureIdx: 0 };

  componentDidMount() {
    this.setState({
      product: this.context.category.products.filter(
        (product) => product.id === this.props.match.params.id
      )[0],
    });
  }

  getPrice = (prices) => {
    return prices.filter((price) =>
      this.props.currency.includes(price.currency)
    )[0].amount;
  };

  onPictureClick = (idx) => {
    this.setState({ pictureIdx: idx });
  };

  renderSidePictures = (gallery) => {
    return gallery.map((pictureSrc, idx) => {
      return (
        <img
          onClick={() => this.onPictureClick(idx)}
          key={pictureSrc}
          src={pictureSrc}
          alt="Product"
        />
      );
    });
  };

  onAddToCartClick = () => {
    const { addToCart, selectedProductProps, history } = this.props;
    addToCart(this.state.product.id, selectedProductProps);
    history.push('/cart');
  };

  removeFromCartClick = () => {
    this.props.deleteProductCart(this.state.product.id);
  };

  isInCart = () => {
    return (
      Object.keys(this.props.cart).filter(
        (item, idx) => Object.values(this.props.cart)[idx]
      )[0] === this.state.product.id
    );
  };

  RenderButton = () => {
    if (!this.isInCart()) {
      return (
        <ButtonStyled onClick={this.onAddToCartClick}>Add to Cart</ButtonStyled>
      );
    } else {
      return (
        <ButtonStyled onClick={this.removeFromCartClick}>
          Remove from Cart
        </ButtonStyled>
      );
    }
  };

  render() {
    const { product } = this.state;

    if (!product) return <div>Product was not found...</div>;

    return (
      <MainStyled>
        <aside>{this.renderSidePictures(product.gallery)}</aside>

        <section>
          <img src={product.gallery[this.state.pictureIdx]} alt="Product" />
        </section>

        <section>
          <h2>{product.name}</h2>
          <h3>
            {product.category[0].toUpperCase() + product.category.slice(1)}
          </h3>
          <ProductAttributes
            productId={product.id}
            attributes={product.attributes}
          />
          <h4> Price:</h4>
          <small>
            {this.props.currency[0]}
            {this.getPrice(product.prices)}
          </small>
          {this.RenderButton()}
          <p dangerouslySetInnerHTML={{ __html: product.description }} />
        </section>
      </MainStyled>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.products.selectedCurrency,
    cart: state.cart,
    selectedProductProps: state.selectedProductProps,
  };
};

export default connect(mapStateToProps, { addToCart, deleteProductCart })(
  Product
);
