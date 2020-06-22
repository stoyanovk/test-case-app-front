import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
import useStyles from "./styles";

export default function Container() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Item One" id="0" />
        <Tab label="Item Two" id="1" />
        <Tab label="Item Three" id="2" />
        <Tab label="Item Four" id="3" />
        <Tab label="Item Five" id="4" />
        <Tab label="Item Six" id="5" />
        <Tab label="Item Seven" id="6" />
      </Tabs>

      {/* {value === index && (
        <Box p={3}>
          <Typography>дщд</Typography>
        </Box>
      )} */}
    </div>
  );
}
