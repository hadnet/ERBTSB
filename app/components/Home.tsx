import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  color: skyblue;
  text-align: center;
`;

// const styles = require('./Home.css');

export default class Home extends Component {
  render() {
    return (
      <div>
        <Title>Electron React Boilerplate with TypeScript</Title>
      </div>
    );
  }
}
