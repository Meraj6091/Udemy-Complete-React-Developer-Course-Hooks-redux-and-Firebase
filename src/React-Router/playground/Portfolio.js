import { div } from "prelude-ls";
import React from "react";
import portfolio from "./Portfolio.css";
import { BrowserRouter, Router, NavLink, Route ,Link} from "react-router-dom";
const home = () => {
	return (
		<div>
			<h1>Welcome</h1>
			<p>This is my site. Take look around!</p>
		</div>
	);
};
const portpolio = () => {
	return (
		<div>
			<h1>portpolio</h1>
			<p>This is my portpolio</p>
			<Link to="/portfolio/itemone/1">ItemOne</Link>
			<Link to="/portfolio/itemtwo/2">ItemTwo</Link>
		</div>
	);
};
const contact = () => {
	return (
		<div>
			<h1>Contact</h1>
			<p>+94-0769482288</p>
		</div>
	);
};
const itemone = (props) => {
	return (
		<div>
			<h1>A First thing that i've done</h1>
			<p>This page if for the item with id of {props.match.params.id}</p>
		</div>
	);
};
const itemtwo = (props) => {
	return (
		<div>
			<h1>A secound thing that i've done</h1>
			<p>This page if for the item with id of {props.match.params.id}</p>
		</div>
	);
};
const header = () => {
	return (
		<div>
			<h1>Portfolio</h1>
			<NavLink to="/" activeClassName="home" exact={true}>
				Home
			</NavLink>
			<NavLink to="/portfolio" activeClassName="portfolio" exact={true}>
				Portfolio
			</NavLink>
			<NavLink to="/contact" activeClassName="contact">
				Contact
			</NavLink>
		</div>
	);
};
function routes() {
	return (
		<BrowserRouter>
			<div>
				{header()}
				<Route path="/" component={home} exact={true} />
				<Route path="/portfolio" component={portpolio} exact={true} />
				<Route path="/contact" component={contact} />
				<Route path="/portfolio/itemone/:id" component={itemone} />
				<Route path="/portfolio/itemtwo/:id" component={itemtwo} />
			</div>
		</BrowserRouter>
	);
}
export default routes;
