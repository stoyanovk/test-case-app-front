import { createSelector } from "reselect";

import { getUser } from "store/auth/selectors";

const getProjects = (state: any): [any] => state.projects.projects;

const getUserProjects = createSelector(
  [getUser, getProjects],
  (user, projects) => ({ user, projects })
);
export { getProjects, getUserProjects };
