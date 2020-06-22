import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
type LinkButton = {
  to: string;
  children: React.ReactChild;
};
export default function LinkButton({ to, children }: LinkButton) {
  const classes = useStyles();
  return (
    <Link className={classes.link} to={to}>
      {children}
    </Link>
  );
}
