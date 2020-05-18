import { useState } from "react";
type targetType = {
  name: string;
  value: string;
};

export default (initialState: object): any => {
  const [formState, setWidth] = useState(initialState);

  const handleChange = ({ target: { name, value } }: { target: targetType }) =>
    setWidth((state) => ({ ...state, [name]: value }));

  return { formState, handleChange };
};
