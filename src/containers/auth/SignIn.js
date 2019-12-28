import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form } from 'react-bootstrap';

import { userActions } from '../../actions/userActions';

import './SignIn.css';
import LoaderButton from '../../components/utils/LoaderButton';

class SignIn extends Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.logout();

    this.state = {
      email: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    const { email, password } = this.state;
    return email.length > 0 && password.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;

    if (email && password) {
      this.props.login(email, password);
    }
  }

  render() {
    console.log(this.props);
    const { auth } = this.props;
    console.log(auth);
    return (
      <div className="Signin">
        <h5 className="text-center text-dark mb-5">ลงชื่อเข้าใช้</h5>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>อีเมล</Form.Label>
            <Form.Control
              name="email"
              autoFocus
              size="lg"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              เราจะเก็บอีเมลคุณเป็นความลับ
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>พาสเวิร์ด</Form.Label>
            <Form.Control
              name="password"
              size="lg"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <LoaderButton
            block
            size="lg"
            type="submit"
            isLoading={this.isLoading}
            disabled={!this.validateForm()}
          >
            เข้าใช้
          </LoaderButton>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loggingIn } = state.authentication;
  return { loggingIn };
};

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

export default connect(mapStateToProps, actionCreators)(SignIn);
