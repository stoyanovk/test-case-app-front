import { createSelector } from "reselect";
import { IStore } from "interfaces/store";
import { getUser } from "store/auth/selectors";
import { IProject, IProjects } from "interfaces/entities";

const getProjectsMessage = (state: IStore): string => state.projects.message;
const getAllProjects = (state: IStore): IProjects => state.projects.projects;
const getError = (state: IStore): boolean => state.projects.error;
const getCurrentProject = (state: IStore): IProject | null =>
  state.projects.currentProject;

const getUserProjects = createSelector(
  [getUser, getAllProjects, getError, getCurrentProject],
  (user, projects, error, currentProject) => ({
    user,
    projects,
    error,
    currentProject,
  })
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
