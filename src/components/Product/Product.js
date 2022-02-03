import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/client';
import Parser from 'html-react-parser';

import MainStyled from './ProductStyles';
import ButtonStyled from '../../sharedStyles/ButtonStyle';
import ProductAttributes from '../ProductAttributes/ProductAttributes';
import {
  addToCart,
  deleteProductCart,
  toggleCartPopup,
  setProductAttributes,
} from '../../redux/actions';
import makeHOC from '../../makeHOC';
import { PRODUCT } from '../../graphql/Queries';

const injectProductQuery = makeHOC(useQuery, 'query', props => [
  PRODUCT,
  { variables: { id: props.match.params.id } },
]);

const Product = injectProductQuery(
  class Product extends PureComponent {
    state = { pictureIdx: 0, error: '' };

    getPrice = prices => {
      return prices.filter(price =>
        this.props.currency.includes(price.currency.label),
      )[0].amount;
    };

    onPictureClick = idx => {
      this.setState({ pictureIdx: idx });
    };

    renderSidePictures = gallery => {
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

    checkForAttributes = () => {
      const { product } = this.props.query.data;
      const { productProps } = this.props;
      let hasAttributes = true;

      product.attributes.forEach(attribute => {
        if (!productProps[attribute.name]) {
          hasAttributes = false;
        }
      });

      return hasAttributes;
    };

    onAddToCartClick = product => {
      const { addToCart, productProps, toggleCartPopup, setProductAttributes } =
        this.props;

      if (this.checkForAttributes()) {
        addToCart(this.props.match.params.id, productProps);
        toggleCartPopup();
        setProductAttributes(product.id, product.attributes);
        this.setState({ error: '' });
      } else {
        this.setState({ error: 'Please select all attributes.' });
      }
    };

    renderButton = (disabled, product) => {
      return (
        <ButtonStyled
          disabled={disabled}
          onClick={() => this.onAddToCartClick(product)}
        >
          Add to Cart
        </ButtonStyled>
      );
    };

    render() {
      const { pictureIdx } = this.state;
      const { data, loading, error } = this.props.query;

      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const { product } = data;

      return (
        <MainStyled>
          <aside className="product-aside">
            {this.renderSidePictures(product.gallery)}
          </aside>

          <section>
            <img src={product.gallery[pictureIdx]} alt="Product" />
          </section>

          <section>
            <h2 className="product-heading">{product.name}</h2>
            <h3 className="product-subheading">
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
            {this.renderButton(!product.inStock, product)}
            <p>{!product.inStock ? '*Product not in stock.' : null}</p>
            <div>{Parser(product.description)}</div>
            {this.state.error && <p className="error">{this.state.error}</p>}
          </section>
        </MainStyled>
      );
    }
  },
);

const mapStateToProps = state => {
  return {
    currency: state.products.selectedCurrency,
    cart: state.cart,
    productProps: state.selectedProductProps,
    cartPopupShown: state.cartPopupShown.status,
  };
};

export default connect(mapStateToProps, {
  addToCart,
  deleteProductCart,
  toggleCartPopup,
  setProductAttributes,
})(Product);
