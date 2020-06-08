import React from "react";
import { useSelector } from "react-redux";
import { getCurrentProject } from "store/projects/selectors";

export default function Project() {
  const currentProject = useSelector((state) => getCurrentProject(state));
  console.log(currentProject);
  return <div></div>;
}
