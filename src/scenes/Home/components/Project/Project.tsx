import React from "react";
import { IProject } from "interfaces/entities";
import { Paper, Box, Button } from "@material-ui/core";
import HTMLContent from "components/HTMLContent";
import ActionBar from "components/ActionBar";
import Tabs from "./components/Tabs";
import Tasks from "./components/Tasks";
import useStyles from "./styles";

type ProjectProps = {
  currentProject: IProject;
  handleUpdateProjectModalToggle: () => void;
  handleDeleteProjectModalToggle: () => void;
};

export default function Project({
  currentProject,
  handleUpdateProjectModalToggle,
  handleDeleteProjectModalToggle,
}: ProjectProps) {
  const [tabValue, setTabValue] = React.useState(0);

  const classes = useStyles();

  const handleToggleTabs = (event: React.ChangeEvent<{}>, value: number) => {
    setTabValue(value);
  };

  return (
    <div className={classes.box}>
      <Tabs
        title={currentProject.project_name}
        activeTab={tabValue}
        handleToggleTabs={handleToggleTabs}
      />
      <div className={classes.content}>
        {tabValue === 0 ? (
          <>
            <Paper variant="outlined" className={classes.paper}>
              <Box p={3} height="100%">
                <HTMLContent description={currentProject.description} />
              </Box>
            </Paper>
          </>
        ) : (
          <>
            <Paper variant="outlined" className={classes.paper}>
              <Box p={3} height="100%">
                <Tasks tasks={currentProject.tasks} />
              </Box>
            </Paper>
          </>
        )}
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
      </div>
    </div>
  );
}
