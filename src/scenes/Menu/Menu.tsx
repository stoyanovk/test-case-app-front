import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Navbar from "./components/Navbar";

import useStyles from "./styles";

export default function Menu() {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // test
  const drawer = (
    <div>
      <div>fdsff</div>
      <div>fdsff</div>
      <div>fdsff</div>
      <div>fdsff</div>
      <div>fdsff</div>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
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
          <Typography variant="h6" noWrap>
            Test Case app
          </Typography>
        </Toolbar>
      </AppBar>
      <Navbar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}>
        <div className={classes.toolbar} />
        <Divider />
        {drawer}
      </Navbar>
    </div>
  );
}
