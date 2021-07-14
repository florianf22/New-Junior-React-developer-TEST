import React, { PureComponent } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { setCurrency } from '../../redux/actions';
import ProductsContext from '../../contexts/ProductsContext';
import Divstyled from './DropdownMenuStyles';
import ColorOverlay from '../ColorOverlay/ColorOverlay';

class DrowdownMenu extends PureComponent {
  static contextType = ProductsContext;
  state = { open: false };

  getFormattedCurrencies = _.memoize((currencySymbols) => {
    const formattedCurrencies = this.context.currencies.map((currency, idx) => {
      return `${currencySymbols[idx]} ${currency}`;
    });

    return [
      ...formattedCurrencies.filter((cur) => cur.includes(this.props.currency)),
      ...formattedCurrencies.filter(
        (cur) => !cur.includes(this.props.currency)
      ),
    ];
  });

  renderItems = (currencies) => {
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
    this.setState({ open: !this.state.open });
  };

  onCurrencyClick = (item) => {
    this.props.setCurrency(item);
  };

  render() {
    const currencySymbols = ['$', '£', '$', '¥', 'У'];
    const currencies = this.getFormattedCurrencies(currencySymbols);

    return (
      <Divstyled onClick={this.onArrowClick} open={this.state.open}>
        <h3>{currencies[0]}</h3>
        <div>
          <img
            className="dropdown-img"
            src="img/icons/arrow.svg"
            alt="arrow icon"
          />
        </div>
        <ul className="dropdown-list">{this.renderItems(currencies)}</ul>
        {this.state.open ? (
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

const mapStateToProps = (state) => {
  return {
    currency: state.products.selectedCurrency,
  };
};

export default connect(mapStateToProps, { setCurrency })(DrowdownMenu);
