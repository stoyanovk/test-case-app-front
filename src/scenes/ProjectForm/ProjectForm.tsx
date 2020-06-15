import React from "react";
import { useDispatch } from "react-redux";
import SimpleForm from "components/SimpleForm";

type initialStateType = {
  project_name: string | "";
  description: string | "";
};

const initialState: initialStateType = {
  project_name: "",
  description: "",
};

export default function ProjectForm({
  title,
  actionCreator,
  state = initialState,
}: {
  title: string;
  state?: initialStateType;
  actionCreator: (data: any) => { type: string; payload?: any };
}) {
  const dispatch = useDispatch();

  const handleSubmit = (data: any) => dispatch(actionCreator(data));

  return (
    <div>
      <SimpleForm title={title} state={state} onSubmit={handleSubmit} />
    </div>
  );
}
