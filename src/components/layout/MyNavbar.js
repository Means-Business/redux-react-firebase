import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from 'react-bootstrap';
import Logo from '../../bunchee-online-logo2.svg';

import './MyNavbar.css';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

function MyNavbar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand>
        <Link to="/">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Bunchee.Online
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <SignedInLinks />
        <SignedOutLinks />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
