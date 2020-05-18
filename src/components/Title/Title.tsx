import React from "react";
import { StyledTypography } from "./style";

const Title = ({ children, ...props }: any) => {
  return <StyledTypography {...props}>{children}</StyledTypography>;
};
export default Title;
