import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { Navbar, Nav } from 'react-bootstrap';

const SignedInLinks = props => {
  console.log(props);
  const { user } = props.auth;
  const { firstName, lastName } = user;
  return (
    <>
      <Nav as="ul" className="mr-5">
        <Nav.Item as="li" className="mx-2">
          <NavLink to="/createproject">โครงการใหม่</NavLink>
        </Nav.Item>
        <Nav.Item as="li" className="mx-2">
          <NavLink to="/login">ลงชื่อออก</NavLink>
        </Nav.Item>
      </Nav>
      <Navbar.Text>
        สวัสดี:{' '}
        <NavLink to="/profile">
          {firstName} {lastName}
        </NavLink>
      </Navbar.Text>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(SignedInLinks);
