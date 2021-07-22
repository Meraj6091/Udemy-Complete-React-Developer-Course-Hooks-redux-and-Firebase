import React from "react";
const details = (props) => {
	return <div>{props.children}</div>;
};

const render = () => {
	return (
		<div>
			<h1>Hi im Meraj</h1>
			{details()}
		</div>
	);
};
export default details;
