import React from "react";
import { List, Typography } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
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
          <ListItem className={classes.listItem} key={task?.id}>
            {task?.task_name}
          </ListItem>
        );
      })}
    </List>
  );
}
