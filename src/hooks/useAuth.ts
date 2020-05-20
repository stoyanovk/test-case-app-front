import { useState, useCallback } from "react";
type targetType = {
  name: string;
  value: string;
  type: string;
  checked?: boolean;
};
type errorsType = string[] | [];

type checkFuncType = (value: string) => boolean;

export default (initialState: object): any => {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState<errorsType>([]);

  const handleChange = useCallback(
    ({ target: { name, value, type, checked } }: { target: targetType }) => {
      const resultValue = type === "checkbox" ? checked : value;
      setFormState((state) => ({ ...state, [name]: resultValue }));

      const updatedErrors = errors.filter((error: string) => error !== name);
      setErrors(updatedErrors);
    },
    [errors]
  );

  const resetState = (): any => setFormState(initialState);

  const handleCheckValidField = useCallback(
    (checkFunc: checkFuncType) => ({
      target: { value, name },
    }: {
      target: targetType;
    }): void => {
      if (checkFunc(value)) {
        setErrors((state: errorsType): errorsType => [...state, name]);
      }
    },
    []
  );

  const hasError = (string: string): boolean => {
    // TS throw error when i make next code
    // return errors.includes(string)
    const res: string[] = [...errors];
    return res.includes(string);
  };

  return {
    formState,
    handleChange,
    resetState,
    errors,
    handleCheckValidField,
    hasError,
  };
};
