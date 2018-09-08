import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AdminPage from './routes/AdminPage';
import AuthPage from './routes/AuthPage';

class Root extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/admin" component={AdminPage}/>
        <Route path="/auth" component={AuthPage}/>
        <Redirect exact from="/admin" to="/auth"/>
      </Fragment>
    );
  }
}

export default Root;
