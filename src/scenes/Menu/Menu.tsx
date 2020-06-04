import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import {
  AppBar,
  Button,
  Divider,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  Box,
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
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
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = () => dispatch(logout());
  React.useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);
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
        <Divider />
        <List className={classes.list}>
          {!!projects.length &&
            projects.map(({ id, project_name }) => {
              return <ListItem key={id}>{project_name}</ListItem>;
            })}
        </List>
        <Divider />
        <Box mt={2} display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<AddCircleIcon />}
          >
            add project
          </Button>
        </Box>
      </Navbar>
    </div>
  );
}
