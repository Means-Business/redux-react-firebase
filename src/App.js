import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import { Container } from 'react-bootstrap';
import MyNavbar from './components/layout/MyNavbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <MyNavbar />
        </Container>
      </div>
    </Router>
  );
}

export default App;
