import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import newspaper from '../assets/newspaper.svg'
export default function NavbarApp() {
    return (
        <Container mt="2">
            <Navbar bg="light" expand="md" fixed="top">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={newspaper}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
      - BlogBC -
    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#footer">About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}
