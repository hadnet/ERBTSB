/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import Router from '../Router';

type P = {};

const Root: React.SFC<P>  = (props: P) => <Router />;

export default hot(Root);
