import { createSelector } from "reselect";

import { getUser } from "store/auth/selectors";
const getProjectsMessage = (state: any): string => state.projects.message;
const getAllProjects = (state: any): [any] => state.projects.projects;
const getError = (state: any): boolean | null => state.projects.error;
const getCurrentProject = (state: any): { [key: string]: any } =>
  state.projects.currentProject;

const getUserProjects = createSelector(
  [getUser, getAllProjects, getError],
  (user, projects, error) => ({ user, projects, error })
);
const getProjectsData = createSelector(
  [getAllProjects, getCurrentProject, getError, getProjectsMessage],
  (projects, currentProject, error, message) => ({
    projects,
    currentProject,
    error,
    message,
  })
);
export {
  getAllProjects,
  getUserProjects,
  getCurrentProject,
  getError,
  getProjectsData,
};
