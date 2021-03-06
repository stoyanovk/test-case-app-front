import React from "react";
import { Drawer } from "@material-ui/core";
import { useResizeWidth } from "hooks";
import useStyles from "./styles";

interface INavbar {
  children?: React.ReactNode;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const mobileScreenWidth = 576;

const Navbar = ({ children, mobileOpen, handleDrawerToggle }: INavbar) => {
  const { width } = useResizeWidth();

  const classes = useStyles();

  const drawerStyles = {
    paper: classes.drawerPaper,
  };

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {width < mobileScreenWidth ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={drawerStyles}
        >
          {children}
        </Drawer>
      ) : (
        <Drawer classes={drawerStyles} variant="permanent" open>
          {children}
        </Drawer>
      )}
    </nav>
  );
};
export default Navbar;
