import React, { FC } from "react";
import Menu from "scenes/Menu";
import useStyles from "./styles";

const Wrapper: FC<{ isAuth: boolean }> = ({ children, isAuth }) => {
  const classes = useStyles();
  const styles = isAuth ? classes.mainIsAuth : classes.main;
  return (
    <>
      {isAuth && <Menu />}
      <div className={styles}>{children}</div>
    </>
  );
};

export default Wrapper;
