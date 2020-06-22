import { createSelector } from "reselect";

import { ITask, ITasks } from "interfaces/entities";

const getProjectsTasks = (state: any): ITasks => state.tasks.tasks;
const getError = (state: any): boolean | null => state.tasks.error;
const getCurrentTask = (state: any): ITask => state.tasks.currentTask;
const getTasksMessage = (state: any): string => state.tasks.message;

const getUserTasks = createSelector(
  [getProjectsTasks, getError, getCurrentTask, getTasksMessage],
  (tasks, error, currentTask, message) => ({
    tasks,
    error,
    currentTask,
    message,
  })
);

export { getUserTasks };
