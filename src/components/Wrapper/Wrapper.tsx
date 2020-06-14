import React, { FC } from "react";
import Menu from "scenes/Menu";
import useStyles from "./styles";

const Wrapper: FC<{ isAuth: boolean }> = ({ children, isAuth }) => {
  const classes = useStyles();
  return (
    <>
      {isAuth && <Menu />}
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default Wrapper;
