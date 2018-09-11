import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class AuthPage extends Component {
  state = {  }
  render() {
    return (
      <div>
        <h1>Auth Page</h1>
        <Route path="/auth/login" render={() => <h2> login </h2> } />
        <Route path="/auth/register" render={ () => <h2> register</h2> } />
      </div>
    );
  }
}

export default AuthPage;
