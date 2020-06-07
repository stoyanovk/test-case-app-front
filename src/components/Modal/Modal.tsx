import React from "react";
import ModalComponent from "@material-ui/core/Modal";

interface IModal {
  children: React.ReactElement<any>;
  open: boolean;
  handleClose: () => void;
}

const Modal = ({ children, open, handleClose }: IModal) => {
  // getModalStyle is not a pure function, we roll the style only on the first render

  return (
    <ModalComponent
      open={open}
      onClose={handleClose}
      //   aria-labelledby="simple-modal-title"
      //   aria-describedby="simple-modal-description"
    >
      {children}
    </ModalComponent>
  );
};
export default Modal;
