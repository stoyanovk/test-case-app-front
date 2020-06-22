import React from "react";
import { Link } from "react-router-dom";
import { List, Typography } from "@material-ui/core";
import { ITasks } from "interfaces/entities";
import useStyles from "./styles";

export default function Tasks({ tasks }: { tasks: ITasks }) {
  const classes = useStyles();

  if (!tasks?.length) {
    return (
      <Typography align="center" variant="h5">
        Tasks for this project do not exist yet
      </Typography>
    );
  }
  return (
    <List className={classes.root}>
      {tasks.map((task) => {
        return (
          <li key={task?.id}>
            <Link className={classes.listItem} to={`/tasks/${task?.id}`}>
              {task?.task_name}
            </Link>
          </li>
        );
      })}
    </List>
  );
}
