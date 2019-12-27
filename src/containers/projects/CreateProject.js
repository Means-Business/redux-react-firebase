import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import './CreateProject.css';

import { createProject } from '../../actions/projectActions';

class CreateProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    const { title, content } = this.state;
    return title.length > 0 && content.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.createProject(this.state);
  }

  render() {
    console.log(this.props);
    return (
      <div className="Signin">
        <h5 className="text-center text-dark mb-5">สร้างโครงการ</h5>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>ชื่อโครงการ</Form.Label>
            <Form.Control
              name="title"
              autoFocus
              size="lg"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="content">
            <Form.Label>รายละเอียด</Form.Label>
            <Form.Control
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
              as="textarea"
              rows="3"
            />
          </Form.Group>

          <Button
            block
            size="lg"
            variant="success"
            type="submit"
            disabled={!this.validateForm()}
          >
            บันทึกโครงการ
          </Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project))
});

export default connect(null, mapDispatchToProps)(CreateProject);
