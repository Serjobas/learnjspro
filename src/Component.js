import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const Head = styled.h1`
  background-color: red;
  color: white;
  font-size: 14px;
`;

const Button = styled.button`
  background-color: green;
  color: blue;
`;

class TheOne extends Component {
  state = {
    count: 0,
    howManyClicked: 0,
    isClicked: 0
  }

  handleClick = () => {
    this.setState( prevState => ({
      count: prevState.count++,
      howManyClicked: prevState.howManyClicked++,
      isClicked: prevState.isClicked++
    }))
  }

  render() {
    return (
      <Fragment>
        <Head>{this.state.count} && { this.state.howManyClicked} </Head>
        <Button onClick={this.handleClick}/>
      </Fragment>
    );
  }
}

export default TheOne;


