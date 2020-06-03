import { createSelector } from "reselect";
//get from state functions

const getProjects = (state: any): [any] => state.projects.projects;

export { getProjects };
