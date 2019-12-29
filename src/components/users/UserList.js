import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userActions } from '../../actions/userActions';

import { Table } from 'react-bootstrap';
import SingleUser from './SingleUser';

class UserList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        {users.loading && <em>กำลังโหลด...</em>}
        {users.error && (
          <span className="text-danger">ERROR: {users.error}</span>
        )}
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>ชื่อ</th>
              <th>นามสกุล</th>
              <th>ลบ</th>
            </tr>
          </thead>

          {users.items &&
            users.items.map(user => {
              return <SingleUser key={user.id} user={user} />;
            })}
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { users } = state;
  return { users };
};

const actionCreators = {
  getUsers: userActions.getAll
};

export default connect(mapStateToProps, actionCreators)(UserList);
