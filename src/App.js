import { Container } from 'reactstrap';
import Header from './components/header';
import React, { Component } from 'react';
import Map from './components/map';
import './App.css';
require('dotenv').config()
//import Container from 'reactstrap/lib/Container';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      applicationName: 'Map Layout'
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header appName={this.state.applicationName}/>
        <Container>
          <Map />
        </Container>
      </div>
    )
  }
}

export default App;

/** import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example; */
