import { FETCH_PROJECT, NEW_PROJECT } from './types';

export const createProject = project => {
  return (dispatch, getState) => {
    dispatch({
      type: NEW_PROJECT,
      payload: project
    });
  };
};

export const fetchProjects = projects => {
  return {
    type: FETCH_PROJECT,
    payload: projects
  };
};
