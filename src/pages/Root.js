import React, { Component } from 'react';
import styled from 'styled-components';

const Head = styled.h1`
  color: red;
`;

class Root extends Component {
  state = {  }
  render() {
    return (
      <Head>Hello this is my HEAD, dough</Head>
    );
  }
}

export default Root;
