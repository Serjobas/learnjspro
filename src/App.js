import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './history';
import { store } from './redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <h1>Lolik</h1>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
