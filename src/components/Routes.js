import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import AuthPage from './pages/AuthPage';

class Root extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" component={MainPage}/>
        <Route path="/auth" component={AuthPage}/>
      </Fragment>
    );
  }
}

export default Root;
