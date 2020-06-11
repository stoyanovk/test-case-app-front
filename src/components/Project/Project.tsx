import React from "react";
import { Paper, Box } from "@material-ui/core";
import Tabs from "./components/Tabs";
import Tasks from "./components/Tasks";

type ProjectProps = {
  title: string;
  description: string | "";
  tasks: any[];
};

export default function Project({ title, description, tasks }: ProjectProps) {
  const [tabValue, setTabValue] = React.useState(0);

  const handleToggleTabs = (event: React.ChangeEvent<{}>, value: number) => {
    setTabValue(value);
  };
  const html = { __html: description };
  return (
    <>
      <Tabs
        title={title}
        activeTab={tabValue}
        handleToggleTabs={handleToggleTabs}
      />
      <Paper variant="outlined">
        {tabValue === 0 ? (
          <Box p={2}>
            <div dangerouslySetInnerHTML={html} />
          </Box>
        ) : (
          <Box p={2}>
            <Tasks tasks={tasks} />
          </Box>
        )}
      </Paper>
    </>
  );
}
