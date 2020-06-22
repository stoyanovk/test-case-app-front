import React from "react";
import { Paper, Box, Button } from "@material-ui/core";
import HTMLContent from "components/HTMLContent";
import ActionBar from "components/ActionBar";
import useStyles from "./styles";

export default function Project({
  currentProject,
  handleUpdateProjectModalToggle,
  handleDeleteProjectModalToggle,
}: any) {
  const classes = useStyles();
  return (
    <>
      <Paper variant="outlined" className={classes.paper}>
        <Box p={3} height="100%">
          <HTMLContent description={currentProject.description} />
        </Box>
      </Paper>
      <ActionBar>
        <>
          <Box px={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpdateProjectModalToggle}
            >
              update
            </Button>
          </Box>
          <Box px={1}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleDeleteProjectModalToggle}
            >
              delete
            </Button>
          </Box>
        </>
      </ActionBar>
    </>
  );
}
