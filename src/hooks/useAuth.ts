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
  [key: string]: any;
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
  // data is object where key is input field name, value validate function
  // I can't describe data object
  const handleCheckValidForm = (data: any): boolean => {
    const checkedObject: checkedObjectType = { ...formState };
    const checkFields: string[] = Object.keys(data);

    for (let i: number = 0; i < checkFields.length; i++) {
      const objectKey: string = checkFields[i];
      const checkFunc = data[objectKey];

      if (checkFunc(checkedObject[objectKey])) {
        setErrors((state: errorsType): errorsType => [...state, objectKey]);
        return true;
      }
    }
    return false;
  };

  const hasError = (string: string): boolean => {
    //I need make next code for errors array, because TS throw error
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
