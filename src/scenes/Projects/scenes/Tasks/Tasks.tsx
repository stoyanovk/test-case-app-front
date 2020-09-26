import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { List, Typography, Paper, Box } from "@material-ui/core";
import { getCurrentProjectTasks } from "store/tasks/selectors";
import { fetchTasks } from "store/tasks/actions";
import useStyles from "./styles";

function Tasks() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { tasks, currentProject } = useSelector(getCurrentProjectTasks);

  useEffect(() => {
    if (currentProject) {
      dispatch(fetchTasks(currentProject.id));
    }
  }, [currentProject, dispatch]);

  return (
    <>
      <Paper variant="outlined" className={classes.paper}>
        <Box p={3} height="100%">
          {!tasks?.length ? (
            <Typography align="center" variant="h5">
              Tasks for this project do not exist yet
            </Typography>
          ) : (
            <List className={classes.root}>
              {tasks.map((task) => {
                return (
                  <li key={task?.id}>
                    <Link
                      className={classes.listItem}
                      to={`/projects/${
                        currentProject && currentProject.id
                      }/tasks/${task?.id}`}
                    >
                      {task?.task_name}
                    </Link>
                  </li>
                );
              })}
            </List>
          )}
        </Box>
      </Paper>
    </>
  );
}
export default React.memo(Tasks);
