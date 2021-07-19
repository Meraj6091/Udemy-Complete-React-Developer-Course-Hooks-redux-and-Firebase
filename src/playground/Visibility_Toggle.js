import React from "react";
import { useState } from "react";
function Visibility_Toggle() {
	const [state, setstate] = useState(true);

	const Onpress = () => {
		setstate(!state);
	};

	return (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={Onpress}>{!state ? "Show Text" : "Hide Text"}</button>
			{state && <p>Hi, I'm Meraj Vindra </p>}{" "}
			{/*if its true then show the paragraph*/}
		</div>
	);
}
export default Visibility_Toggle;
