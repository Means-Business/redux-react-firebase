import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import logo from './bunchee-online-logo2.svg';
import './App.css';

import { Container, Navbar, Row } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <Row>
            <Navbar variant="dark">
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                Bunchee.Online
              </Navbar.Brand>
            </Navbar>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
