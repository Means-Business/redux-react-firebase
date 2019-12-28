import React from 'react';
import { NavLink } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';

import { Navbar, Nav } from 'react-bootstrap';

export default function SignedInLinks(props) {
  return (
    <>
      <Nav as="ul" className="mr-5">
        <Nav.Item as="li" className="mx-2">
          <NavLink to="/createproject">โครงการใหม่</NavLink>
        </Nav.Item>
        <Nav.Item as="li" className="mx-2">
          <NavLink to="/">ลงชื่อออก</NavLink>
        </Nav.Item>
      </Nav>
      <Navbar.Text>
        สวัสดี: <a href="#login">มโนชญ์ หลุ่ยจิ๋ว</a>
      </Navbar.Text>
    </>
  );
}
