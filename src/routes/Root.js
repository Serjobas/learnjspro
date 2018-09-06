import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import AdminPage from './AdminPage';
import AuthPage from './AuthPage';

class Root extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/admin" component={AdminPage}/>
        <Route path="/auth" component={AuthPage}/>
      </Fragment>
    );
  }
}

export default Root;
