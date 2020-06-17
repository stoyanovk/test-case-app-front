import React from "react";
import { IProject } from "interfaces/entities";
import { Paper, Box, Button } from "@material-ui/core";
import HTMLContent from "components/HTMLContent";
import Tabs from "./components/Tabs";
import Tasks from "./components/Tasks";
import useStyles from "./styles";

// type currentProjectType = {
//   id: string | number;
//   project_name: string;
//   description: string | "";
//   tasks: any[];
// };

type ProjectProps = {
  currentProject: IProject;
  handleUpdateModalToggle: () => void;
  handleDeleteModalToggle: () => void;
};

export default function Project({
  currentProject,
  handleUpdateModalToggle,
  handleDeleteModalToggle,
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
        <Paper variant="outlined" className={classes.paper}>
          {tabValue === 0 ? (
            <Box p={3} height="100%">
              <HTMLContent description={currentProject.description} />
            </Box>
          ) : (
            <Box p={3} height="100%">
              <Tasks tasks={currentProject.tasks} />
            </Box>
          )}
        </Paper>
        <Box mt={2}>
          <Paper>
            <Box p={2} display="flex" justifyContent="flex-end">
              <Box px={1}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUpdateModalToggle}
                >
                  update
                </Button>
              </Box>
              <Box px={1}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleDeleteModalToggle}
                >
                  delete
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </div>
    </div>
  );
}
