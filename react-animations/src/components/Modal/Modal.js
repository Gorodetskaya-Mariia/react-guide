import React from "react";
import { Transition } from "react-transition-group";
import "./Modal.css";

const animationTiming = {
	enter: 400,
	exit: 1000
}

const modal = props => {
  return (
    <Transition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
    >
      {state => {
        const cssClasses = [
					"Modal",
					state === "entering"
					? "opened"
					: state === "exiting" ? "closed" : null
				];
        return (
          <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;