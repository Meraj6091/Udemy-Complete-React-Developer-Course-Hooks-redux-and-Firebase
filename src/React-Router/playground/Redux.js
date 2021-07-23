import React from "react";
import { createStore } from "redux";
const test = () => {
	return <div></div>;
};
const store = createStore((state = { count: 0 }, action) => {
	switch (action.type) {
		case "INCREMENT":
			const incrementby =
				typeof action.incrementby === "number" ? action.incrementby : 1;
			return {
				count: state.count + incrementby,
			};
		case "DECREMENT":
			const decrementby =
				typeof action.decrementby === "number" ? action.decrementby : 1;
			return {
				count: state.count - decrementby,
			};
		case "RESET":
			return {
				count: (state.count = 0),
			};
		default:
			return state;
	}
});
store.subscribe(() => console.log(store.getState()));
store.dispatch({
	type: "INCREMENT",
	incrementby: 5,
});
store.dispatch({
	type: "INCREMENT",
});
store.dispatch({
	type: "RESET",
});
store.dispatch({
	type: "DECREMENT",
});
store.dispatch({
	type: "DECREMENT",
	decrementby: 10,
});

export default test;
