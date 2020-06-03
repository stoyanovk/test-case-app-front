import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Button,
  Divider,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "./components/Avatar";
import Navbar from "./components/Navbar";
import { logout } from "store/auth/actions";
import { fetchProjects } from "store/projects/actions";
import { getUser } from "store/auth/selectors";
import { getProjects } from "store/projects/selectors";

import useStyles from "./styles";

export default function Menu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user, projects } = useSelector((state) => ({
    user: getUser(state),
    projects: getProjects(state),
  }));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = () => dispatch(logout());
  React.useEffect(() => {
    dispatch(fetchProjects());
  }, []);
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.box}>
            <Typography variant="h6" noWrap>
              Test Case app
            </Typography>
            <Button onClick={handleClick} className={classes.button}>
              logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Navbar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}>
        <div className={classes.toolbar} />
        <Divider />
        <Avatar name={user.user_name} email={user.email} />
        <List>
          {projects.length &&
            projects.map(({ id, project_name }) => {
              return <ListItem key={id}>{project_name}</ListItem>;
            })}
        </List>
        <Divider />
      </Navbar>
    </div>
  );
}
