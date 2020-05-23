import React from "react";
import { StyledLink } from "./style";

type LinkType = {
  children: React.ReactNode;
  to: string;
};

const LinkButton = ({ children, to }: LinkType) => {
  return <StyledLink to={to}> {children}</StyledLink>;
};
export default LinkButton;
