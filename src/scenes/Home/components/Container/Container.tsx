import React from "react";
import { IProject } from "interfaces/entities";
import Tabs from "../Tabs";
import Tasks from "../Tasks";
import Project from "../Project";
import useStyles from "./styles";

type ContainerProps = {
  currentProject: IProject;
  handleUpdateProjectModalToggle: () => void;
  handleDeleteProjectModalToggle: () => void;
};

export default function Container({
  currentProject,
  handleUpdateProjectModalToggle,
  handleDeleteProjectModalToggle,
}: ContainerProps) {
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
        {tabValue === 0 && (
          <Project
            currentProject={currentProject}
            handleUpdateProjectModalToggle={handleUpdateProjectModalToggle}
            handleDeleteProjectModalToggle={handleDeleteProjectModalToggle}
          />
        )}
        {tabValue === 1 && <Tasks tasks={currentProject.tasks} />}
      </div>
    </div>
  );
}
