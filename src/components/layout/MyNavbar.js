import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import Logo from '../../bunchee-online-logo2.svg';

import './MyNavbar.css';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

function MyNavbar(props) {
  console.log(props);
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
          หมู ชอบเขียนโค๊ด
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        {props.auth.loggedIn ? <SignedInLinks /> : <SignedOutLinks />}
      </Navbar.Collapse>
    </Navbar>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(MyNavbar);
