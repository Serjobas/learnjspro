import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AdminPage from './AdminPage';
import AuthPage from './AuthPage';

class Root extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/admin" component={AdminPage}/>
        <Route path="/auth" component={AuthPage}/>
        <Redirect exact from="/" to="/auth"/>
      </Fragment>
    );
  }
}

export default Root;
