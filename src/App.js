import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';

import { Container } from 'react-bootstrap';
import MyNavbar from './components/layout/MyNavbar';
import Routes from './Routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Container>
            <MyNavbar />
          </Container>
        </div>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
