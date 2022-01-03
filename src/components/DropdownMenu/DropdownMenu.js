import React, { PureComponent } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import {
  setCurrency,
  toggleCartPopup,
  toggleCurrencyDropdownMenu,
} from '../../redux/actions';
import CurrenciesContext from '../../contexts/CurrenciesContext';
import Divstyled from './DropdownMenuStyles';
import ColorOverlay from '../ColorOverlay/ColorOverlay';

class DrowdownMenu extends PureComponent {
  static contextType = CurrenciesContext;

  getFormattedCurrencies = _ => {
    const formattedCurrencies = this.context.currencies.map(currency => {
      return `${currency.symbol} ${currency.label}`;
    });

    return [
      ...formattedCurrencies.filter(cur => cur.includes(this.props.currency)),
      ...formattedCurrencies.filter(cur => !cur.includes(this.props.currency)),
    ];
  };

  renderItems = currencies => {
    return currencies.map((item, idx) => {
      if (idx !== 0)
        return (
          <li
            className="dropdown-item"
            onClick={() => this.onCurrencyClick(item)}
            key={item}
          >
            {item}
          </li>
        );

      return null;
    });
  };

  onArrowClick = () => {
    if (this.props.cartPopupShown.status) {
      this.props.toggleCartPopup();
    }

    this.props.toggleCurrencyDropdownMenu();
  };

  onCurrencyClick = item => {
    this.props.setCurrency(item);
  };

  render() {
    const currencies = this.getFormattedCurrencies();

    return (
      <Divstyled
        onClick={this.onArrowClick}
        open={this.props.currencyDropdownMenuShown.status}
      >
        <h3>{currencies[0]}</h3>
        <div>
          <img
            className="dropdown-img"
            src="img/icons/arrow.svg"
            alt="arrow icon"
          />
        </div>
        <ul className="dropdown-list">{this.renderItems(currencies)}</ul>
        {this.props.currencyDropdownMenuShown.status ? (
          <ColorOverlay
            onClick={() => {
              this.setState({ open: false });
            }}
            color="transparent"
          />
        ) : null}
      </Divstyled>
    );
  }
}

const mapStateToProps = state => {
  return {
    currency: state.products.selectedCurrency,
    cartPopupShown: state.cartPopupShown,
    currencyDropdownMenuShown: state.currencyDropdownMenu,
  };
};

export default connect(mapStateToProps, {
  setCurrency,
  toggleCartPopup,
  toggleCurrencyDropdownMenu,
})(DrowdownMenu);
