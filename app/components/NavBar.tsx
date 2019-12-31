import * as React from 'react';
import {
    // Colors,
    Alignment,
    Button,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading
} from '@blueprintjs/core';
// import { IExampleProps } from '@blueprintjs/docs-theme';
import { Link } from '@reach/router';

interface IProps {
  className?: string;
  id?: string;
}

export class NavBar extends React.PureComponent<IProps> {
  public render() {
    return (
      <Navbar className="bp3-dark">
        <NavbarGroup align={ Alignment.LEFT }>
          <NavbarHeading>Blueprint</NavbarHeading>
          <NavbarDivider />
          <Link to="/" className="bp3-button bp3-minimal bp3-icon-home">
            Home
          </Link>
          <Link to="/dashboard" className="bp3-button bp3-minimal bp3-icon-dashboard">
            Dashboard
          </Link>
          <NavbarDivider />
          <Button minimal={true} icon="refresh" text="Verify" />
        </NavbarGroup>
      </Navbar>
    );
  }
}
