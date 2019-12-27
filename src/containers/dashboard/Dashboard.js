import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';
import Notifications from './Notifications';
import ProjectList from '../../components/projects/ProjectList';

class Dashboard extends Component {
  render() {
    console.log(this.props);
    const { projects } = this.props;
    return (
      <Container className="mt-5 py-5">
        <Row>
          <Col md>
            <ProjectList projects={projects} />
          </Col>
          <Col md={{ span: 4, offset: 1 }}>
            <Notifications />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.project.projects
});

export default connect(mapStateToProps)(Dashboard);
