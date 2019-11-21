import React from 'react';
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap/';


function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Tønsberg IT</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">About us</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
}

export default Navigation;