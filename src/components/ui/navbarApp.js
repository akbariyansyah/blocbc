import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import newspaper from '../assets/newspaper.svg'
export default function NavbarApp() {
    return (
        <Container mt="2">
            <Navbar bg="light" expand="md" sticky="top">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={newspaper}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
      BlogBC
    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">business</Nav.Link>
                        <Nav.Link href="#link">entertainment</Nav.Link>
                        <Nav.Link href="#link">general</Nav.Link>
                        <Nav.Link href="#link">health</Nav.Link>
                        <Nav.Link href="#link">science</Nav.Link>
                        <Nav.Link href="#link">sports</Nav.Link>
                        <Nav.Link href="#link">technology</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}
