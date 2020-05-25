import { useState, useCallback } from "react";

type eventTargetType = {
  name: string;
  value: string;
  type: string;
  checked?: boolean;
};

type errorsType = string[] | [];

type checkFuncType = (value: string) => boolean;

type checkFormFieldsType = {
  fields: string[];
  checkFunctions: checkFuncType[];
};

type checkedObjectType = {
  [key: string]: string;
};
export default (initialState: object): any => {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState<errorsType>([]);

  const handleChange = useCallback(
    ({
      target: { name, value, type, checked },
    }: {
      target: eventTargetType;
    }) => {
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
      target: eventTargetType;
    }): void => {
      if (checkFunc(value)) {
        setErrors((state: errorsType): errorsType => [...state, name]);
      }
    },
    []
  );

  const handleCheckValidForm = ({
    fields,
    checkFunctions,
  }: checkFormFieldsType): boolean => {
    // elementary check
    if (fields.length !== checkFunctions.length) {
      throw new Error("fields length must be equal checkFunctions length");
    }
    //I need make next code for state object, becose TS throw error
    const checkedObject: checkedObjectType = { ...formState };

    for (let i = 0; i < fields.length; i++) {
      if (checkFunctions[i](checkedObject[fields[i]])) {
        setErrors((state: errorsType): errorsType => [...state, fields[i]]);
        return true;
      }
    }
    return false;
  };

  const hasError = (string: string): boolean => {
    //I need make next code for errors array, becose TS throw error
    const typedErrors: string[] = [...errors];
    return typedErrors.includes(string);
  };

  return {
    formState,
    handleChange,
    resetState,
    errors,
    handleCheckValidField,
    hasError,
    handleCheckValidForm,
  };
};
