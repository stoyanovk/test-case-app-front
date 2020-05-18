import React from "react";
import { Drawer } from "@material-ui/core";
import { useResizeWidth } from "hooks";
import useStyles from "./styles";

import { Auth } from "api";

const auth = new Auth();

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

  const handleClick = () => {
    auth.register({
      user_name: "Konstantin",
      password: "123456",
      confirm: "123456",
      email: "stoyanov.k1992@gmail.com",
    }).then((res)=>{
      console.log(res)
    });
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
          <button onClick={handleClick}>click</button>
        </Drawer>
      )}
    </nav>
  );
};
export default Navbar;
