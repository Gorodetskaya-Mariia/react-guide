import React, { Component } from "react";
import "./App.css";
import Modal from "./components/Modal-Transition/Modal";
import ModalTwo from "./components/Modal-CssTransition/ModalTwo";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
	state = { modalIsOpen: false};

	showModal = () => {
		this.setState({ modalIsOpen: true });
	}

	closeModal = () => {
		this.setState({ modalIsOpen: false });
	}

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
				{/* <Modal show={this.state.modalIsOpen} closed={this.closeModal}/> */}
				<ModalTwo show={this.state.modalIsOpen} closed={this.closeModal}/>
				{this.state.modalIsOpen
				? <Backdrop show={this.state.modalIsOpen}/>
				: null}
        <button className="Button" onClick={this.showModal}>Open Modal Transition</button>
				<br/>
				<br/>
				<button className="Button" onClick={this.showModal}>Open Modal CSSTransition</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
