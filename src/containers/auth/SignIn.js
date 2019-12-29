import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Form, Jumbotron, Button, Alert } from 'react-bootstrap';

import { userActions } from '../../actions/userActions';

import './SignIn.css';
import LoaderButton from '../../components/utils/LoaderButton';

class SignIn extends Component {
  constructor(props) {
    super(props);

    // พอมาหน้าล็อกอิน user จะถูกล้างทิ้ง
    this.props.logout();

    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    const { username, password } = this.state;
    return username.length > 0 && password.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;

    if (username && password) {
      this.props.login(username, password);
    }
  }

  render() {
    console.log(this.props.history);
    const { loggingIn } = this.props;
    const { username, password } = this.state;
    return (
      <Jumbotron fluid className="px-5">
        <div className="Signin">
          <h5 className="text-center text-dark mb-5">ลงชื่อเข้าใช้</h5>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>ชื่อผู้ใช้</Form.Label>
              <Form.Control
                name="username"
                autoFocus
                size="lg"
                type="text"
                value={username}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>พาสเวิร์ด</Form.Label>
              <Form.Control
                name="password"
                size="lg"
                type="password"
                value={password}
                onChange={this.handleChange}
              />
            </Form.Group>
            <LoaderButton
              block
              size="lg"
              type="submit"
              isLoading={loggingIn}
              disabled={!this.validateForm()}
            >
              เข้าใช้
            </LoaderButton>
            <Link to="/register" className="btn btn-link">
              <Button variant="link">ลงทะเบียน</Button>
            </Link>
          </Form>
        </div>
      </Jumbotron>
    );
  }
}

const mapStateToProps = state => {
  const { loggingIn } = state.auth;
  return { loggingIn };
};

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

export default connect(mapStateToProps, actionCreators)(SignIn);
