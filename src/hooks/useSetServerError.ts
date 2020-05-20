import { useState } from "react";

export default () => {
  const [errorMessage, setErrorMessage] = useState("");

  const resetErrorMessage = (time?: number) => {
    setTimeout(() => {
      setErrorMessage("");
    }, time || 6000);
  };
  return { errorMessage, setErrorMessage, resetErrorMessage };
};
