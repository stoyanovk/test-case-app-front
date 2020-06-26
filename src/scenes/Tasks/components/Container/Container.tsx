import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Divider, Paper, List, ListItem, Box } from "@material-ui/core";

import HTMLContent from "components/HTMLContent";
import { ITasks } from "interfaces/entities";
import useStyles from "./styles";

function Container({ tasks }: { tasks: ITasks }) {
  const classes = useStyles();
  const {
    task_id,
    project_id,
  }: { task_id: string; project_id: string } = useParams();

  const currentTask = tasks.find(({ id }) => {
    return task_id === id.toString();
  });

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Box display="flex">
          <List className={classes.sidebar}>
            {tasks.map(({ id, task_name }) => (
              <NavLink
                key={id}
                className={classes.link}
                activeClassName={classes.active}
                to={`/projects/${project_id}/tasks/${id}`}
              >
                <ListItem id={id} key={id}>
                  {task_name}
                </ListItem>
              </NavLink>
            ))}
          </List>
          <Divider orientation="vertical" flexItem />
          <Box flex="1 0 0 " p={2}>
            {currentTask && (
              <HTMLContent description={currentTask.description} />
            )}
          </Box>
        </Box>
      </Paper>
    </div>
  );
}
export default React.memo(Container);
