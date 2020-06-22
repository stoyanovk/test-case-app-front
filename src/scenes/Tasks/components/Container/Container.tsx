import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HTMLContent from "components/HTMLContent";
import { ITasks } from "interfaces/entities";
import useStyles from "./styles";

export default function Container({ tasks }: { tasks: ITasks }) {
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
        {tasks.map(({ id, task_name }) => (
          <Tab label={task_name} id={id} key={id} />
        ))}
      </Tabs>
      {tasks.map(({ id, description }, i) => {
        console.log(value, i);
        console.log(description);
        return (
          value === i && <HTMLContent key={id} description={description} />
        );
      })}
    </div>
  );
}
