import React from 'react';
import { NavLink } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';

import { Nav } from 'react-bootstrap';

export default function SignedOutLinks(props) {
  return (
    <Nav as="ul" className="mx-auto">
      <Nav.Item as="li" className="mx-2">
        <NavLink to="/">Signup</NavLink>
      </Nav.Item>
      <Nav.Item as="li" className="mx-2">
        <NavLink to="/">Login</NavLink>
      </Nav.Item>
    </Nav>
  );
}
