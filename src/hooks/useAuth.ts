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
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = useCallback(
    ({ target: { name, value, type, checked } }: { target: targetType }) => {
      const resultValue = type === "checkbox" ? checked : value;
      setFormState((state) => ({ ...state, [name]: resultValue }));

      const updatedErrors = errors.filter((error: string) => error !== name);
      setErrors(updatedErrors);
      setErrorMessage("");
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

  type checkFormFieldsType = {
    fields: string[];
    checkFunctions: checkFuncType[];
  };
  type checkedObjectType = {
    [key: string]: string;
  };

  const handleCheckValidForm = ({
    fields,
    checkFunctions,
  }: checkFormFieldsType): boolean => {
    if (fields.length !== checkFunctions.length) {
      throw new Error("fields length must be equal checkFunctions length");
    }
    // это необходимо чтобы указать что у объекта может быть ключ строчного типа
    const obj: checkedObjectType = { ...formState };

    for (let i = 0; i < fields.length; i++) {
      if (checkFunctions[i](obj[fields[i]])) {
        return true;
      }
    }
    return false;
  };

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
    handleCheckValidForm,
    errorMessage,
    setErrorMessage,
  };
};
