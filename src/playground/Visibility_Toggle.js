import React from "react";
import { useState } from "react";
function Visibility_Toggle() {
	let [state, setstate] = useState(true);

	const Onpress = () => {
		setstate(!state);
	};

	return (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={Onpress}>{!state ? "Show Text" : "Hide Text"}</button>
			{state && <p>Hi, I'm Meraj Vindra </p>}
		</div>
	);
}
export default Visibility_Toggle;
