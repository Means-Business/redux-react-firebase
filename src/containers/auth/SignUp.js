import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { userActions } from '../../actions/userActions';

import { Form, Jumbotron, Button } from 'react-bootstrap';
import LoaderButton from '../../components/utils/LoaderButton';

import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    const { firstName, lastName, username, password } = this.state.user;
    return (
      firstName.length > 0 &&
      lastName.length > 0 &&
      username.length > 0 &&
      password.length > 0
    );
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.firstName && user.lastName && user.username && user.password) {
      this.props.register(user);
    }
  }

  render() {
    console.log(this.props);
    const { registering } = this.props;
    const { user } = this.state;
    return (
      <Jumbotron>
        <div className="Signup">
          <h5 className="text-center text-dark mb-5">ลงทะเบียน</h5>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label>ชื่อ</Form.Label>
              <Form.Control
                name="firstName"
                autoFocus
                size="lg"
                type="text"
                value={user.firstName}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>นามสกุล</Form.Label>
              <Form.Control
                name="lastName"
                size="lg"
                type="text"
                value={user.lastName}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="username">
              <Form.Label>ชื่อผู้ใช้</Form.Label>
              <Form.Control
                name="username"
                size="lg"
                type="text"
                value={user.username}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>พาสเวิร์ด</Form.Label>
              <Form.Control
                name="password"
                size="lg"
                type="password"
                value={user.password}
                onChange={this.handleChange}
              />
            </Form.Group>

            <LoaderButton
              block
              size="lg"
              type="submit"
              isLoading={registering}
              disabled={!this.validateForm()}
            >
              ลงทะเบียน
            </LoaderButton>
            <Link to="/login" className="btn btn-link">
              <Button variant="link">ลงชื่อเข้าใช้</Button>
            </Link>
          </Form>
        </div>
      </Jumbotron>
    );
  }
}

const mapStateToProps = state => {
  const { registering } = state.registration;
  return { registering };
};

const actionCreators = {
  register: userActions.register
};

export default connect(mapStateToProps, actionCreators)(SignUp);
