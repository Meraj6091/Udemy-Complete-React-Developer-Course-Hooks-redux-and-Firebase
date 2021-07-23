import React from "react";
import est from "./Test.css";
import { test } from "./Test2";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
const add = () => {
	return <div>Meraj</div>;
};
const addtwo = () => {
	return <div>Vindira</div>;
};
const notfound = () => {
	return (
		<div>
			404! <br />
			<NavLink to="/" activeClassName="is-active">
				Go home
			</NavLink>
			<br />
			<Link to="/add">Go AddTo</Link>
			<br />
			<Link to="/create">Go Test</Link>
			<br />
		</div>
	);
};

function Test(props) {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/add" component={addtwo} />
					<Route path="/" component={add} exact={true} />
					<Route path="/create" component={test} />
					<Route component={notfound} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}
export default Test;
