import React from 'react';
import SignInForm from '../auth/SignInForm'

class AuthPage extends React.Component {

  render () {
    return (
      <div>
        <h1>Auth page</h1>
        <SignInForm />
      </div>
    )
  }
}

export default AuthPage;