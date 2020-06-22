import React from "react";
import { Link } from "react-router-dom";
import { List, Typography, Paper, Box, Button } from "@material-ui/core";
import ActionBar from "components/ActionBar";
import { ITasks } from "interfaces/entities";
import useStyles from "./styles";

export default function Tasks({ tasks }: { tasks: ITasks }) {
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
                      to={`/tasks/${task?.id}`}
                    >
                      {task?.task_name}
                    </Link>
                  </li>
                );
              })}
            </List>
          )}
        </Box>
        <ActionBar>
          <>
            <Box px={1}>
              <Button
                variant="contained"
                color="primary"
                // onClick={handleUpdateProjectModalToggle}
              >
                create
              </Button>
            </Box>
            <Box px={1}>
              <Button
                variant="contained"
                color="primary"
                // onClick={handleUpdateProjectModalToggle}
              >
                update
              </Button>
            </Box>
            <Box px={1}>
              <Button
                variant="contained"
                color="primary"
                // onClick={handleUpdateProjectModalToggle}
              >
                delete
              </Button>
            </Box>
          </>
        </ActionBar>
      </Paper>
    </>
  );
}
