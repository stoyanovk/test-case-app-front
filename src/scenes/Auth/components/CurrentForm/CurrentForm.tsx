import React from "react";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import ResetPassword from "../ResetPassword";

const CurrentForm = ({ index }: { index: number }) => {
  switch (index) {
    case 0:
      return <SignIn />;
    case 1:
      return <SignUp />;
    case 2:
      return <ResetPassword />;
    default:
      return <SignIn />;
  }
};
export default CurrentForm;
