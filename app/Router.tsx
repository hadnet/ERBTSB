import * as React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RouteComponentProps, createHistory, LocationProvider, Router as Routes} from '@reach/router';
import createHashSource from 'hash-source';
import Home from './containers/HomePage';
import Dashboard from './components/Dashboard';
import { NavBar } from './components/NavBar';

const source: any = createHashSource();
const history = createHistory(source);

export default class Router extends React.Component<RouteComponentProps> {

  public render() {
    return <>
    <LocationProvider history={history}>
      <NavBar />
      <Routes>
        <Home path="/" />
        <Dashboard path="/dashboard" />
      </Routes>
    </LocationProvider>
    </>;
  }
}
