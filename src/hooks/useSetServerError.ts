import { useState } from "react";

export default () => {
  const [error, setError] = useState("");

  const resetError = (time?: number) => {
    setTimeout(() => {
      setError("");
    }, time || 6000);
  };
  return { error, setError, resetError };
};
