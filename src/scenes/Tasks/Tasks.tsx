import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress } from "@material-ui/core";
import Container from "./components/Container";
import { getUserTasks } from "store/tasks/selectors";
import { fetchCurrentTask, fetchTasks } from "store/tasks/actions";

export default function Tasks() {
  const { project_id, task_id } = useParams();

  const { tasks, error, currentTask } = useSelector(getUserTasks);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!tasks.length) {
      dispatch(fetchTasks(project_id));
    }
    if (!!currentTask) {
      dispatch(fetchCurrentTask(task_id));
    }
  }, [currentTask, dispatch, project_id, task_id, tasks]);

  if (error) {
    return <h1>Something went wrong</h1>;
  }
  console.log("render");
  return (
    <>
      <h1>Tasks11</h1>
      {!tasks.length && !currentTask ? (
        <CircularProgress size={200} />
      ) : (
        <Box height="80%" mt={3}>
          <Container tasks={tasks} />
        </Box>
      )}
    </>
  );
}
