import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

// import MainPage from '../pages/AdminPage';
import AuthPage from '../pages/AuthPage';
import AdminPage from '../pages/AdminPage';

class Root extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" component={AdminPage}/>
        <Route path="/auth" component={AuthPage}/>
      </Fragment>
    );
  }
}

export default Root;
