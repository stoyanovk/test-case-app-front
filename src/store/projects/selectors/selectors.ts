import { createSelector } from "reselect";

import { getUser } from "store/auth/selectors";

const getProjects = (state: any): [any] => state.projects.projects;
const getError = (state: any): boolean | null => state.projects.error;
const getCurrentProject = (state: any): { [key: string]: any } =>
  state.projects.currentProject;

const getUserProjects = createSelector(
  [getUser, getProjects, getError],
  (user, projects, error) => ({ user, projects, error })
);
export { getProjects, getUserProjects, getCurrentProject, getError };
