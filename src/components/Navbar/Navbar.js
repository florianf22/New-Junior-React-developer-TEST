import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCurrency, setCategory, toggleCartPopup } from '../../redux/actions';
import { HeaderStyled, LinkStyled } from './NavbarStyles';
import DrowdownMenu from '../DropdownMenu/DropdownMenu';
import ShoppingCartMini from '../ShoppingCartMini/ShoppingCartMini';

class Navbar extends PureComponent {
  onCategoryChangeClick = category => {
    this.props.setCategory(category);
    this.props.toggleCartPopup(false);
  };

  renderLinkItem = itemName => {
    return (
      <LinkStyled
        className="header-link"
        onClick={() => this.onCategoryChangeClick(itemName)}
        to="/"
        // React yelling when passing boolean value
        active={this.props.category === itemName ? 'active' : null}
      >
        {itemName}
      </LinkStyled>
    );
  };

  render() {
    return (
      <HeaderStyled ref={this.props.navBarRef}>
        <ul className="header-list">
          {this.renderLinkItem('all')}
          {this.renderLinkItem('tech')}
          {this.renderLinkItem('clothes')}
        </ul>

        <Link to="/" onClick={() => this.onCategoryChangeClick('all')}>
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

const mapStateToProps = state => {
  return {
    currency: state.products.currency,
    category: state.products.selectedCategory,
  };
};

export default connect(mapStateToProps, {
  setCurrency,
  setCategory,
  toggleCartPopup,
})(Navbar);
