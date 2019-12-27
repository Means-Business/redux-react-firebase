import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap';

import './SignUp.css';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    } = this.state;
    return (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      password === confirmPassword
    );
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(
      `ลงชื่อเข้าใช้ ${this.state.firstName} ${this.state.lastName} อีเมลคือ ${this.state.email} พาสเวิร์ดคือ ${this.state.password} ยืนยันพาสเวิร์ดคือ ${this.state.confirmPassword}`
    );
  }

  render() {
    return (
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
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="lastName">
            <Form.Label>นามสกุล</Form.Label>
            <Form.Control
              name="lastName"
              autoFocus
              size="lg"
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>อีเมล</Form.Label>
            <Form.Control
              name="email"
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

          <Form.Group controlId="confirmPassword">
            <Form.Label>ยืนยันพาสเวิร์ด</Form.Label>
            <Form.Control
              name="confirmPassword"
              size="lg"
              type="password"
              value={this.state.confirmPassword}
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
            ลงทะเบียน
          </Button>
        </Form>
      </div>
    );
  }
}
