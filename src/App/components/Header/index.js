import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    //NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';


class Header extends Component {

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

            <Navbar color="inverse" light expand="md">
                <NavbarBrand href="/">WELLDONE</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/components/">Components</NavLink>
                            <NavLink to='/register'>Registro</NavLink>

                        </NavItem>
                        <NavItem>
                            <NavLink to="https://gitlab.com/keepcoding4">GitLab</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    };
}

export default Header;