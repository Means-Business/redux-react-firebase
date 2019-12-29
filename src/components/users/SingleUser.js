import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userActions } from '../../actions/userActions';

import { Button } from 'react-bootstrap';

class SingleUser extends Component {
  handleDeleteUser(id) {
    return e => this.props.deleteUser(id);
  }

  render() {
    const { user } = this.props;
    return (
      <tbody>
        <tr>
          <td>{user.id}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>
            {user.deleting ? (
              <em> - Deleting...</em>
            ) : user.deleteError ? (
              <span className="text-danger"> - ERROR: {user.deleteError}</span>
            ) : (
              <span>
                {' '}
                <Button variant="link" onClick={this.handleDeleteUser(user.id)}>
                  <span>X</span>
                </Button>{' '}
              </span>
            )}
          </td>
        </tr>
      </tbody>
    );
  }
}

// const mapStateToProps = state => {
//   const { auth } = state;
//   const { user } = auth;
//   return { user };
// };

const actionCreators = {
  deleteUser: userActions.delete
};

export default connect(null, actionCreators)(SingleUser);
