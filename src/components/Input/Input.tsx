import React from "react";
import { TextField } from "@material-ui/core";

interface IInput {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  type?: string;
  onChange: (e: any) => void;
  [propName: string]: any;
}
const Input = ({ type = "text", ...props }: IInput) => {
  return <TextField type={type} variant="outlined" {...props} />;
};

export default Input;
