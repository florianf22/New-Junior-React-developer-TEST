import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ProductsStore } from '../../contexts/ProductsContext';
import ProductsList from '../ProductList/ProductsList';
import Navbar from '../Navbar/Navbar';
import Category from '../Category/Category';
import Product from '../Product/Product';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Cart from '../Cart/Cart';
import { GlobalStyles } from './GlobalStyles';

class App extends PureComponent {
  navBarRef = React.createRef();

  render() {
    return (
      <ProductsStore>
        <GlobalStyles />
        <BrowserRouter>
          <Navbar navBarRef={this.navBarRef} />
          <Switch>
            <ScrollToTop>
              <Route
                path="/"
                exact
                render={() => (
                  <React.Fragment>
                    <Category />
                    <ProductsList navBarRef={this.navBarRef} />
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
