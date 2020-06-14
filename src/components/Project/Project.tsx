import React from "react";
import { Paper, Box } from "@material-ui/core";
import HTMLContent from "components/HTMLContent";
import Tabs from "./components/Tabs";
import Tasks from "./components/Tasks";
import useStyles from "./styles";

type ProjectProps = {
  title: string;
  description: string | "";
  tasks: any[];
};

export default function Project({ title, description, tasks }: ProjectProps) {
  const [tabValue, setTabValue] = React.useState(0);

  const classes = useStyles();

  const handleToggleTabs = (event: React.ChangeEvent<{}>, value: number) => {
    setTabValue(value);
  };

  return (
    <div className={classes.box}>
      <Tabs
        title={title}
        activeTab={tabValue}
        handleToggleTabs={handleToggleTabs}
      />
      <div className={classes.content}>
        <Paper variant="outlined" className={classes.paper}>
          {tabValue === 0 ? (
            <Box p={3} height="100%">
              <HTMLContent description={description} />
            </Box>
          ) : (
            <Box p={3} height="100%">
              <Tasks tasks={tasks} />
            </Box>
          )}
        </Paper>
      </div>
    </div>
  );
}
