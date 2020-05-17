import React, { FC } from "react";
import Menu from "components/Menu";

const Wrapper: FC = ({ children }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
    </>
  );
};

export default Wrapper;
