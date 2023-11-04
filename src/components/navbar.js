import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import './navbar-style.css';

function TextLinkExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar expand="lg">
        <Navbar.Brand href="/" text-2xl font-bold text-black m-2>ACM x Ahmedabad University</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav>
            <Nav.Link href="/schedule" className="text-base font-medium text-gray-700 hover:text-gray-900">
            SCHEDULE
            </Nav.Link>
            <Nav.Link href="/speakers" className="text-base font-medium text-gray-700 hover:text-gray-900">
            SPEAKERS
            </Nav.Link>
            <Nav.Link href="/team" className="text-base font-medium text-gray-700 hover:text-gray-900">
            TEAM
            </Nav.Link>
            <Nav.Link href="/venue" className="text-base font-medium text-gray-700 hover:text-gray-900">
            VENUE
            </Nav.Link>
            <Nav.Link href="/accomodation" className="text-base font-medium text-gray-700 hover:text-gray-900">
            ACCOMODATION
            </Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default TextLinkExample;
