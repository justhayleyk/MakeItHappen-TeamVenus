import React from 'react';
import './navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class Makeithappennav extends React.Component {
  // This line replaces the constructor above and is the new ES6 syntax.
  state = {};

  // I could have initialized state above, but lets get in the habit of setting state on mount.
  componentDidMount = () => {
    this.state = {
      isOpen: false
    };
  };

  // In using the new ES6 syntax, we replace the above with an arrow function which is a requirement is lieu of the binding done in the constructor
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img src="/images/logo.png" alt="Make It Happen" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/budgetsetup">Setup</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/debt">Add Debt</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/dream">Add Dream</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Sign Up | Login </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
