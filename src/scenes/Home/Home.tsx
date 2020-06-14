import React from "react";
import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getCurrentProject } from "store/projects/selectors";
import Project from "components/Project";

const Home = () => {
  const currentProject = useSelector((state) => getCurrentProject(state));

  return (
    <>
      <h1> My app </h1>

      {currentProject && (
        <Box height="80%" mt={3}>
          <Project
            title={currentProject.project_name}
            description={currentProject.description}
            tasks={currentProject.tasks}
          />
        </Box>
      )}
    </>
  );
};
export default Home;
