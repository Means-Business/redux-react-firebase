import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import './Footer.css';

export default function Footer() {
  return (
    <Navbar fixed="bottom">
      <Nav className="justify-content-center mx-auto">
        <Nav.Item>
          <p>
            สร้างด้วย{' '}
            <span role="img" aria-label="love">
              ❤️
            </span>{' '}
            จาก ภูเก็ต
          </p>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
