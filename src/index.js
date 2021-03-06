import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Es6 from "./playground/Es6";
import Es6_2 from "./playground/Es6_2";
import Visibility_Toggle from "./playground/Visibility_Toggle";
import Es6_classes from "./playground/Es6_classes";
import Functional from "./playground/Functional";
import Counter from "./playground/counter_example";
import DefaultProps from "./playground/DefaultProps";
import OptionModal from "./Components/OptionModal";
import IndecisionApp from "./Components/IndecisionApp";
import Test from "./React-Router/components/Test";
import Portfolio from './React-Router/playground/Portfolio'
import Store from "./React-Router/playground/Redux";
import {test} from "./React-Router/playground/Destructuring"
import Redux2 from "./React-Router/playground/Redux-expensify"
ReactDOM.render(
	<React.StrictMode>
		{/* <Counter count={0}/> */}
		{/* <DefaultProps>
			<h1>This is Default Props</h1>
			<p>for learning purpose</p>
		</DefaultProps> */}
		{/* <Portfolio/> */}
		
		{/* <Store/> */}
		{/* {test()} */}
		<Redux2/>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
