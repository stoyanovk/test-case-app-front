import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import useStyles from "./styles";

type TasksProps = {
  tasks: any[];
};
export default function Tasks({ tasks }: TasksProps) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {tasks.map(({ id, task_name }) => {
        return (
          <ListItem className={classes.listItem} key={id}>
            {task_name}
          </ListItem>
        );
      })}
    </List>
  );
}
