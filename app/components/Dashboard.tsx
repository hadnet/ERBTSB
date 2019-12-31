import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from '@reach/router';

const Title = styled.h2`
  color: skyblue;
  text-align: center;
`;

// const styles = require('./Home.css');

export default class Dashboard extends React.Component<RouteComponentProps> {
  public render() {
    return (
      <div>
        <Title>Dashboard</Title>
      </div>
    );
  }
}
