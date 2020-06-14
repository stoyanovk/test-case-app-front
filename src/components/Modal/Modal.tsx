import React from "react";
import { Modal as ModalComponent } from "@material-ui/core";
import useStyles from "./styles";

interface IModal {
  children: any;
  open: boolean;
  handleClose: () => void;
}

const Modal = ({ children, open, handleClose }: IModal) => {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const classes = useStyles();
  return (
    <ModalComponent open={open} onClose={handleClose}>
      <div className={classes.box}>{children}</div>
    </ModalComponent>
  );
};
export default Modal;
