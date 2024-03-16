import React from "react";
import ReactDoM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCalenderClose}></div>;
};

const Overlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <>
      {ReactDoM.createPortal(<Backdrop onCalenderClose={props.onCalenderClose}/>, document.getElementById("portal"))}
      {ReactDoM.createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById("portal")
      )}
    </>
  );
};

export default Modal;
