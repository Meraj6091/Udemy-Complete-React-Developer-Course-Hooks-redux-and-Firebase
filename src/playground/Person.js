import React, { useState } from "react";
export const Adult = (x) => {
	if (x >= 18) {
		console.log("Adult");
		drink(x);
	} else {
		console.log("Child");
		drink(x);
	}
};
const drink = (x) => {
	if (x >= 21) {
		console.log("Can Drink");
	} else console.log("Cant drink");
};
const senior = (x) => {
	if (x >= 21) {
		console.log("Senior");
	} else console.log("junior");
};
export default senior;
function Person() {
	return <div></div>;
}
