import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ProductsStore } from '../contexts/ProductsContext';
import ProductsList from './ProductsList';
import Navbar from './Navbar';
import Category from './Category';
import Product from './Product';
import ScrollToTop from './ScrollToTop';
import Cart from './Cart';
import { GlobalStyles } from '../styles/GlobalStyles';

class App extends Component {
  render() {
    return (
      <ProductsStore>
        <GlobalStyles />
        <BrowserRouter>
          <Navbar />
          <Switch>
            <ScrollToTop>
              <Route
                path="/"
                exact
                render={(routeProps) => (
                  <React.Fragment>
                    <Category />
                    <ProductsList {...routeProps} />
                  </React.Fragment>
                )}
              />
              <Route
                path="/product/:id"
                exact
                render={(routeProps) => <Product {...routeProps} />}
              />
              <Route path="/cart" exact render={() => <Cart />} />
            </ScrollToTop>
          </Switch>
        </BrowserRouter>
      </ProductsStore>
    );
  }
}

export default App;
