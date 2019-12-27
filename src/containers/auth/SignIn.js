import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap';

import './SignIn.css';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
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
    console.log(
      `ลงชื่อเข้าใช้ อีเมลคือ ${this.state.email} พาสเวิร์ดคือ ${this.state.password}`
    );
  }

  render() {
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
          <Button
            block
            size="lg"
            variant="success"
            type="submit"
            disabled={!this.validateForm()}
          >
            เข้าใช้
          </Button>
        </Form>
      </div>
    );
  }
}
