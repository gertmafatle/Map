import React, { Component } from 'react';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  
   } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        }
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

render() {
    return (
        <Navbar color="faded" light expand="md">
<NavbarBrand href="/" className="mr-auto">{this.props.appName}</NavbarBrand>
            <NavbarToggler onClick={this.toggle} className="mr-2" />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="https://kibbconnect.com/">KiConnect</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavBar>
                <DropdownToggle nav caret>
                    Options
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                    Incidents
                    </DropdownItem>
                    <DropdownItem>
                    Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    Cancel
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            </Collapse>
        </Navbar>
            );
        }
}
export default Header;