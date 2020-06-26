import React, { useState, useEffect, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "./components/AppBar";
import SideBar from "./components/Sidebar";
import { fetchLogout } from "store/auth/actions";
import {
  fetchProjects,
  fetchCurrentProject,
  fetchAddProjects,
} from "store/projects/actions";
import { getUserProjects } from "store/projects/selectors";

import useStyles from "./styles";

export type createProjectStateType = {
  project_name: string;
  description: string;
};

const createProjectState: createProjectStateType = {
  project_name: "",
  description: "",
};

export default function Menu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user, projects, error, currentProject } = useSelector(
    getUserProjects
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (e: MouseEvent) => {
    //I check the id on the id of the current project, so as not to resubmit the request

    if (currentProject && +e.currentTarget.id !== +currentProject.id) {
      return dispatch(fetchCurrentProject(e.currentTarget.id));
    }
    if (!currentProject) {
      dispatch(fetchCurrentProject(e.currentTarget.id));
    }
  };

  const handleSubmit = (data: { [key: string]: string }) => {
    dispatch(fetchAddProjects(data));
  };

  const handleLogout = () => {
    dispatch(fetchLogout());
  };

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <AppBar
        handleLogout={handleLogout}
        handleDrawerToggle={handleDrawerToggle}
      />
      <SideBar
        user={user}
        handleClick={handleClick}
        handleDrawerToggle={handleDrawerToggle}
        projects={projects}
        mobileOpen={mobileOpen}
        error={error}
        onSubmit={handleSubmit}
        createProjectState={createProjectState}
      />
    </div>
  );
}
