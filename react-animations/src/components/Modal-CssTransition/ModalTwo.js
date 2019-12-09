import React from "react";
import { CSSTransition } from "react-transition-group";
import "./ModalTwo.css";

const animationTiming = {
  enter: 400,
  exit: 400
};

const modalTwo = props => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames="fade-slide"
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modalTwo;
