/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import Home from '../components/Home';

export default class HomePage extends React.Component<RouteComponentProps> {
  public render() {
    return <Home />;
  }
}
