import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userActions } from '../../actions/userActions';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Notifications from './Notifications';
import ProjectList from '../../components/projects/ProjectList';
import UserList from '../../components/users/UserList';

class Dashboard extends Component {
  // componentDidMount() {
  //   this.props.getUsers();
  // }

  // handleDeleteUser(id) {
  //   return e => this.props.deleteUser(id);
  // }

  render() {
    console.log(this.props);
    const { loggedIn } = this.props;
    const { projects } = this.props;

    return (
      <Container className="mt-5 py-5">
        <Row>
          <Col sm={8}>
            {loggedIn ? (
              <div>
                <h2 className="mb-5">โครงการทั้งหมด</h2>
                <ProjectList projects={projects} />
              </div>
            ) : (
              <p>กรุณาลงชื่อเข้าใช้</p>
            )}
          </Col>
          <Col sm={4}>
            <Notifications />
            <hr />
            <UserList />
            {/* <h1>สวัสดีคุณ {user.firstName}!</h1>
            <p>วันนี้ คุณเขียนโค๊ดหรือยัง</p>
            <h3>รายชื่อผู้ลงทะเบียน:</h3>
            {users.loading && <em>กำลังโหลด...</em>}
            {users.error && (
              <span className="text-danger">ERROR: {users.error}</span>
            )} */}
            {/* {users.items && (
              <>
                <ul>
                  {users.items.map((user, index) => (
                    <li key={user.id}>
                      {user.firstName + ' ' + user.lastName}
                      {user.deleting ? (
                        <em> - Deleting...</em>
                      ) : user.deleteError ? (
                        <span className="text-danger">
                          {' '}
                          - ERROR: {user.deleteError}
                        </span>
                      ) : (
                        <span>
                          {' '}
                          -{' '}
                          <Button onClick={this.handleDeleteUser(user.id)}>
                            Delete
                          </Button>{' '}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )} */}
            <p>Logout</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { auth } = state;
  const { projects } = state.project;
  const { loggedIn } = auth;
  return { loggedIn, projects };
};

// const actionCreators = {
//   getUsers: userActions.getAll,
//   deleteUser: userActions.delete
// };

export default connect(mapStateToProps)(Dashboard);
