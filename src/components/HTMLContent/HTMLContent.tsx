import React from "react";
import useStyles from "./styles";

export default function HTMLContent({ description }: { description: string }) {
  const html = { __html: description };
  const classes = useStyles();
  return <div className={classes.box} dangerouslySetInnerHTML={html} />;
}
