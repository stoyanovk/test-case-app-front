import { createSelector } from "reselect";
import { getCurrentProject } from "store/projects/selectors";
import { IStore } from "interfaces/store";
import { ITask, ITasks } from "interfaces/entities";

const getTasks = (state: IStore): ITasks => state.tasks.tasks;
const getError = (state: IStore): boolean => state.tasks.error;
const getCurrentTask = (state: IStore): ITask | null => state.tasks.currentTask;
const getTasksMessage = (state: IStore): string => state.tasks.message;

const getUserTasks = createSelector(
  [getTasks, getError, getCurrentTask, getTasksMessage],
  (tasks, error, currentTask, message) => ({
    tasks,
    error,
    currentTask,
    message,
  })
);
//плохое название
const getCurrentProjectTasks = createSelector(
  [getCurrentProject, getTasks, getError, getTasksMessage],
  (currentProject, tasks, error, message) => ({
    currentProject,
    tasks,
    error,
    message,
  })
);
export { getUserTasks, getTasks, getCurrentProjectTasks };
