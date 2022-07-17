import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from "react-bootstrap";
import './navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Navigation() {

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="pt-4 pb-4 fs-1 fw-bold">FakeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href={`/`}>Products</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Women</NavDropdown.Item>
              <NavDropdown.Item href="">Men</NavDropdown.Item>
              <NavDropdown.Item href="">Jewellery</NavDropdown.Item>
              <NavDropdown.Item href="">Electronics</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link className="ms-5" href="#cart"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;