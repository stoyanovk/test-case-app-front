import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Button,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "./components/Avatar";
import Navbar from "./components/Navbar";
import { logout } from "store/auth/actions";
import { getUser } from "store/auth/selectors";

import useStyles from "./styles";

export default function Menu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = () => dispatch(logout());

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
      </Navbar>
    </div>
  );
}
