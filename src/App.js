import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './helpers/history';
import { alertActions } from './actions/alertActions';

import './App.css';

import { Container, Nav, Toast } from 'react-bootstrap';
import MyNavbar from './components/layout/MyNavbar';
import Routes from './Routes';
import Footer from './components/layout/Footer';
import MyAlert from './components/utils/MyAlert';

class App extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      console.log(
        `The current URL is ${location.pathname}${location.search}${location.hash}`
      );
      console.log(`The last navigation action was ${action}`);
      this.props.clearAlerts();
    });
  }

  render() {
    console.log(this.props);
    const { alert } = this.props;
    return (
      <Router history={history}>
        <div className="App">
          <Container>
            <MyNavbar />
          </Container>
        </div>

        <Routes />
        <Nav className="justify-content-center mx-auto">
          {alert.message && (
            <MyAlert alert={alert} />
            // <Toast>
            //   <Toast.Header>
            //     <strong className="mr-auto">ข้อความ</strong>
            //     <small>ปิด</small>
            //   </Toast.Header>
            //   <Toast.Body>
            //     <div className={`alert ${alert.type}`} role="alert">
            //       {alert.message}
            //     </div>
            //   </Toast.Body>
            // </Toast>
          )}
        </Nav>
        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  const { alert } = state;
  return { alert };
};

const actionCreators = {
  clearAlerts: alertActions.clear
};

export default connect(mapStateToProps, actionCreators)(App);
