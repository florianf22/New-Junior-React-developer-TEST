import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setSubCategory, setCurrency, setCategory } from '../actions/index';
import ProductsContext from '../contexts/ProductsContext';
import HeaderStyled from '../styles/NavbarStyles';
import LinkStyled from '../styles/LinkStyles';
import UlStyled from '../styles/UnorderedListStyles';
import DrowdownMenu from './DropdownMenu';
import ShoppingCartMini from './ShoppingCartMini';

class Navbar extends Component {
  static contextType = ProductsContext;

  onSubCategoryChangeClick = (categoryName) => {
    this.props.setSubCategory(categoryName);
  };

  renderSubCategoriesList = () => {
    return this.props.subcategories.map((sb) => {
      return (
        <li key={sb}>
          <LinkStyled
            active={this.props.selectedSubcategory === sb || false}
            onClick={() => this.onSubCategoryChangeClick(sb)}
            href="#REPLACE_ME"
          >
            {sb}
          </LinkStyled>
        </li>
      );
    });
  };

  render() {
    return (
      <HeaderStyled>
        <UlStyled>{this.renderSubCategoriesList()}</UlStyled>

        <Link to="/">
          <img src="img/logo.svg" alt="Logo" />
        </Link>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <DrowdownMenu />
          <ShoppingCartMini headerRef={this.headerRef} />
        </div>
      </HeaderStyled>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedSubcategory: state.products.selectedSubcategory,
    currency: state.products.currency,
    category: state.products.selectedCategory,
    subcategories: state.subcategories[state.products.selectedCategory],
  };
};

export default connect(mapStateToProps, {
  setSubCategory,
  setCurrency,
  setCategory,
})(Navbar);
