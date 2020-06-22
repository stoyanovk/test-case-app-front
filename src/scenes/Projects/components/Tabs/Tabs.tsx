import React from "react";
import Paper from "@material-ui/core/Paper";
import { Tabs as TabsComponent } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

type TabProps = {
  title: string;
  activeTab: number;
  handleToggleTabs: (event: React.ChangeEvent<{}>, value: number) => void;
};
export default function Tabs({ title, activeTab, handleToggleTabs }: TabProps) {
  return (
    <Paper square>
      <TabsComponent
        value={activeTab}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleToggleTabs}
        aria-label="disabled tabs example"
      >
        <Tab label={title} />
        <Tab label="Tasks" />
      </TabsComponent>
    </Paper>
  );
}
