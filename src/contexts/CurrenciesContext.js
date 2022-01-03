import React, { Component } from 'react';
import { useQuery } from '@apollo/client';

import { CURRENCIES } from '../graphql/Queries';
import makeHOC from '../makeHOC';

const injectCurrenciesQuery = makeHOC(useQuery, 'query', props => [CURRENCIES]);

const Context = React.createContext();

export const CurrenciesStore = injectCurrenciesQuery(
  class CurrenciesStore extends Component {
    render() {
      const { data, loading, error } = this.props.query;

      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <Context.Provider value={data}>{this.props.children}</Context.Provider>
      );
    }
  },
);

export default Context;
