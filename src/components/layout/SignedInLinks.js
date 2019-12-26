import React from 'react';
import { NavLink } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';

import { Navbar, Nav } from 'react-bootstrap';

export default function SignedInLinks(props) {
  return (
    <>
      <Nav as="ul" className="mx-auto">
        <Nav.Item as="li" className="mx-2">
          <NavLink to="/">New Project</NavLink>
        </Nav.Item>
        <Nav.Item as="li" className="mx-2">
          <NavLink to="/">Logout</NavLink>
        </Nav.Item>
      </Nav>
      <Navbar.Text>
        Signed in as: <a href="#login">Manot Luijiu</a>
      </Navbar.Text>
    </>
  );
}
