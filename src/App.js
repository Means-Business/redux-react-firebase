import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import { Container } from 'react-bootstrap';
import MyNavbar from './components/layout/MyNavbar';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <MyNavbar />
        </Container>
      </div>
      <Routes />
    </Router>
  );
}

export default App;
