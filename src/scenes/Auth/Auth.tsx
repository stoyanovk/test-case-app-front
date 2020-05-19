import React from "react";
import { ReactSVG } from "react-svg";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CurrentForm from "./components/CurrentForm";
import { useStyles } from "./style";

import logo from "./images/logo.svg";

export default function Auth() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <ReactSVG src={logo} />
        <Typography component="h1" variant="h4" color="textSecondary">
          Test case application
        </Typography>
      </div>
      <Box mt={2}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Sign In" />
          <Tab label="Sign In" />
          <Tab label="reset password" />
        </Tabs>
        <CurrentForm index={value} />
      </Box>
    </Container>
  );
}
