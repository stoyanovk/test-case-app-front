import { useState, useCallback } from "react";
type targetType = {
  name: string;
  value: string;
  type: string;
  checked: boolean;
};

export default (initialState: object): any => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = useCallback(
    ({ target: { name, value, type, checked } }: { target: targetType }) => {
      const resultValue = type === "checkbox" ? checked : value;
      setFormState((state) => ({ ...state, [name]: resultValue }));
    },
    []
  );
  const resetState = (): any => setFormState(initialState);

  return { formState, handleChange, resetState };
};
