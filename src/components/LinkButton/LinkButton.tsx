import React from "react";
import { StyledLink } from "./style";

type LinkType = {
  children: React.ReactNode;
  to: string;
  theme: any;
};

const LinkButton = ({ theme, children, to }: LinkType) => {
  return (
    <StyledLink theme={theme} to={to}>
      {" "}
      {children}
    </StyledLink>
  );
};
export default LinkButton;
