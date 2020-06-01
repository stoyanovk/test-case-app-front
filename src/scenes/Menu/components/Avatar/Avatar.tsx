import React from "react";
import { Avatar as AvatarIcon, Typography, Box } from "@material-ui/core";
import useStyles from "./styles";

interface IAvatar {
  name: string;
  email: string;
}
export default function Avatar({ name, email }: IAvatar) {
  const iconLabel = name[0];
  const classes = useStyles();
  return (
    <Box pt={4} pb={4} display="flex" alignItems="center">
      <AvatarIcon className={classes.icon}>{iconLabel}</AvatarIcon>
      <Box ml={2}>
        <Typography color="textPrimary">{name}</Typography>
        <Typography className={classes.email} color="textPrimary">
          {email}
        </Typography>
      </Box>
    </Box>
  );
}
