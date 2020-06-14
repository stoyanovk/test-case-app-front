import React, { useState, useEffect, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "./components/AppBar";
import SideBar from "./components/Sidebar";
import { logout } from "store/auth/actions";
import { fetchProjects, fetchCurrentProject } from "store/projects/actions";
import { getUserProjects } from "store/projects/selectors";

import useStyles from "./styles";

export default function Menu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user, projects, error } = useSelector((state) =>
    getUserProjects(state)
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleClick = (e: MouseEvent) => {
    dispatch(fetchCurrentProject(e.currentTarget.id));
  };
  const handleLogout = () => dispatch(logout());

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
      />
    </div>
  );
}
