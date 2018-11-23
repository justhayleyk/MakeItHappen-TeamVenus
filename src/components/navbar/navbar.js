import React from 'react';
import './navbar.css';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import { Link } from 'react-router-dom';

export default class Makeithappennav extends React.Component {
  // This line replaces the constructor above and is the new ES6 syntax.
  state = {};

  // I could have initialized state above, but lets get in the habit of setting state on mount.
  componentDidMount = () => {
    this.setState({
      isOpen: false
    });
  };

  // In using the new ES6 syntax, we replace the above with an arrow function which is a requirement is lieu of the binding done in the constructor
  toggle = () => {
    // let isOpen = this.state.isOpen;
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link to="/">
            <img src="/images/logo.png" alt="Make It Happen" />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/budgetsetup">Setup</Link>
              </NavItem>
              <NavItem>
                <Link to="/budget">Budget</Link>
              </NavItem>
              <NavItem>
                <Link to="/calculations">Add Debt</Link>
              </NavItem>
              <NavItem>
                <Link to="/dream">Add Dream</Link>
              </NavItem>
              <NavItem>
                <Link to="/loginsignup">Sign Up | Login </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
