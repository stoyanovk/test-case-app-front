import React from "react";
import { Link } from "react-router-dom";
import { List, Typography, Paper, Box } from "@material-ui/core";

import { ITasks, IProject } from "interfaces/entities";
import useStyles from "./styles";

export default function Tasks({
  currentProject,
  tasks,
}: {
  tasks: ITasks;
  currentProject: IProject;
}) {
  const classes = useStyles();

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
                      to={`/projects/${currentProject.id}/tasks/${task?.id}`}
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
