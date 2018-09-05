import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Root from './pages/Root';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Route path="/" exact component={Root} />
            <Route path="/lol" render={ () => <h1>Fuck you</h1> }/>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
