import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Button, Divider, List, ListItem } from "@material-ui/core/";
import AppBar from "./components/AppBar";
import Avatar from "./components/Avatar";
import Navbar from "./components/Navbar";
import { logout } from "store/auth/actions";
import { fetchProjects } from "store/projects/actions";
import { getUserProjects } from "store/projects/selectors";

import useStyles from "./styles";

export default function Menu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user, projects } = useSelector((state) => getUserProjects(state));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
      <Navbar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}>
        <div className={classes.toolbar} />
        <Divider />
        <Avatar name={user.user_name} email={user.email} />
        <Divider />
        <List className={classes.list}>
          {!!projects.length &&
            projects.map(({ id, project_name }) => {
              return (
                <ListItem className={classes.listItem} key={id}>
                  {project_name}
                </ListItem>
              );
            })}
        </List>
        <Divider />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<AddCircleIcon />}
        >
          add project
        </Button>
      </Navbar>
    </div>
  );
}
