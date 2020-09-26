import React from "react";
import {
  AppBar as AppBarComponent,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";

interface IAppBar {
  handleLogout: () => void;
  handleDrawerToggle: () => void;
}

export default function AppBar({ handleLogout, handleDrawerToggle }: IAppBar) {
  const classes = useStyles();
  return (
    <AppBarComponent position="fixed" className={classes.appBar}>
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
          <Button onClick={handleLogout} className={classes.button}>
            logout
          </Button>
        </div>
      </Toolbar>
    </AppBarComponent>
  );
}
