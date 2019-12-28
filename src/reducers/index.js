import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { alertReducer } from './alertReducer';
import { registrationReducer } from './registrationReducer';
import { usersReducer } from './usersReducer';
import projectReducer from './projectReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  registration: registrationReducer,
  users: usersReducer,
  alert: alertReducer,
  project: projectReducer
});

export default rootReducer;
