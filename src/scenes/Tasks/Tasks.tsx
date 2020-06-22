import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress } from "@material-ui/core";
import Container from "./components/Container";
import { getUserTasks } from "store/tasks/selectors";
import { fetchCurrentTask } from "store/tasks/actions";
import { fetchCurrentProject } from "store/projects/actions";

export default function Tasks() {
  const { project_id, task_id } = useParams();
  const { tasks, error, currentTask, message } = useSelector((state) =>
    getUserTasks(state)
  );
  const dispatch = useDispatch();
  console.log(tasks, error, currentTask, message);

  React.useEffect(() => {
    if (!tasks.length && !currentTask) {
      dispatch(fetchCurrentTask(task_id));
      dispatch(fetchCurrentProject(project_id));
    }
  }, [currentTask, dispatch, project_id, task_id, tasks]);

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <>
      <h1>Tasks</h1>
      {!tasks.length && !currentTask ? (
        <CircularProgress size={200} />
      ) : (
        <Box height="80%" mt={3}>
          <Container />
        </Box>
      )}
    </>
  );
}
