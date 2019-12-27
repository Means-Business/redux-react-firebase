import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

export default class Dashboard extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col md>
            <ProjectList />
          </Col>
          <Col md={{ span: 4, offset: 1 }}>
            <Notifications />
          </Col>
        </Row>
      </Container>
    );
  }
}
