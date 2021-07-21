import React from "react";
function test() {
	return <Functional name="Meraj" age={22} />;
}
function Functional(props) {
	return <p>Name:{props.name} Age:{props.age}</p>;

}
export default test;
