import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from "gatsby"

export default class NavbarComponent2 extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <Link to="/about/">O mnie</Link>
              </NavItem>
              <NavItem>
                <Link to="/about/">O mnie</Link>
              </NavItem>
              <NavItem>
                <Link to="/about/">O mnie</Link>
              </NavItem>
              <NavItem>
                <Link to="https://github.com/reactstrap/reactstrap">GitHub</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}