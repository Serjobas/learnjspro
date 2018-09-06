import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom'
import { ConnectedRouter} from 'connected-react-router'

import Root from './routes';

import store, { history } from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Root />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
