import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Divider, Paper, List, ListItem, Box, Button } from "@material-ui/core";
import ActionBar from "components/ActionBar";
import HTMLContent from "components/HTMLContent";
import { ITasks } from "interfaces/entities";
import useStyles from "./styles";

function Container({
  tasks,
  updateTaskModalToggle,
  deleteTaskModalToggle,
}: {
  tasks: ITasks;
  updateTaskModalToggle: (data: any) => void;
  deleteTaskModalToggle: (data: any) => void;
}) {
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
      <ActionBar>
        <>
          <Box px={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={updateTaskModalToggle}
            >
              update
            </Button>
          </Box>
          <Box px={1}>
            <Button
              variant="contained"
              color="secondary"
              onClick={deleteTaskModalToggle}
            >
              delete
            </Button>
          </Box>
        </>
      </ActionBar>
    </div>
  );
}
export default React.memo(Container);
