import React, { Component } from 'react';
import { Auth, Logger } from 'aws-amplify';

const logger = new Logger('Profile');

export default class Profile extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.loadProfile();
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.user && this.props.user) {
      this.loadProfile();
    }
  }

  loadProfile() {
    const { user } = this.props;
    Auth.userAttributes(user)
      .then(data => this.loadSuccess(data))
      .catch(err => this.handleError(err));
  }

  loadSuccess(data) {
    logger.info('loaded user attributes', data);
    const profile = this.translateAttributes(data);
    this.setState({ profile: profile });
  }

  handleError(error) {
    logger.info('load / save user attributes error', error);
    this.setState({ error: error.message || error });
  }

  translateAttributes(data) {
    const profile = {};
    data
      .filter(attr => ['authorFirstName', 'authorLastName'].includes(attr.Name))
      .forEach(attr => (profile[attr.Name] = attr.Value));
    return profile;
  }

  render() {
    console.log(this.state);
    const { profile, error } = this.state;

    return (
      <div>
        <h1>test</h1>
      </div>
    );
  }
}
