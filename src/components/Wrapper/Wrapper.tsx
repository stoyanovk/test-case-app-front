import React, { FC } from "react";
import Menu from "scenes/Menu";

const Wrapper: FC<{ isAuth: boolean }> = ({ children, isAuth }) => {
  return (
    <>
      {isAuth && <Menu />}
      <main>{children}</main>
    </>
  );
};

export default Wrapper;
