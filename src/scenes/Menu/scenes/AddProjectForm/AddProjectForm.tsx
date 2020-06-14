import React from "react";
import { useDispatch } from "react-redux";
import SimpleForm from "components/SimpleForm";
import { fetchAddProjects } from "store/projects/actions";

type initialStateType = {
  project_name: string | "";
  description: string | "";
};

const initialState: initialStateType = {
  project_name: "",
  description: "",
};

export default function AddProjectForm() {
  const dispatch = useDispatch();

  const handleSubmit = (data: any) => dispatch(fetchAddProjects(data));

  return (
    <div>
      <SimpleForm
        title="Add new project"
        state={initialState}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
