# Animations in React Apps

- https://reactcommunity.org/react-transition-group/

				{/* <Transition
					mountOnEnter
					unmountOnExit
					in={this.state.modalIsOpen}
					timeout={duration}>
					{state => (
						 <Modal show={state} closed={this.closeModal}/>
					)}
				</Transition> */}

					let cssClasses =[
		"Modal",
		props.show ==="entering"
			? "opened"
			: props.show === "exiting" ? "closed" : null
	];