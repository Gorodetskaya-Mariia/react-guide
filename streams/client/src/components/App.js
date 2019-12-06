import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom"; 

const PageOne = () => {
	return <div>Page One</div>;
};

const PageTwo = () => {
	return <div>Page Two</div>;
};

const App = () => {
	return <div>
		<BrowserRouter>
			<Route path="/" exact component={PageOne}></Route>
			<Route path="/pagetwo" component={PageTwo}></Route>
		</BrowserRouter>
		</div>
};

export default App;