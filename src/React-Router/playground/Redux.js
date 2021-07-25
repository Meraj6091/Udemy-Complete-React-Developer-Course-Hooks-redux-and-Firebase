import React from "react";
import { createStore } from "redux";
const test = () => {
	return <div></div>;
};
const incrementCount = ({ incrementby = 1 } = {}) => ({
	type: "INCREMENT",
	incrementby,
});
const decrementby = ({ decrementby = 1 } = {}) => ({
	type: "DECREMENT",
	decrementby,
});
const reset = ({ resetby = 0 } = {}) => ({
	type: "RESET",
	resetby,
});
const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case "INCREMENT":
			return {
				count: state.count + action.incrementby,
			};
		case "DECREMENT":
			return {
				count: state.count - action.decrementby,
			};
		case "RESET":
			return {
				count: (state.count = 0),
			};
		default:
			return state;
	}
};
const store = createStore(countReducer);
store.subscribe(() => console.log(store.getState()));
store.dispatch(incrementCount({ incrementby: 5 }));
store.dispatch(incrementCount());
store.dispatch(reset());
store.dispatch(decrementby());
store.dispatch(decrementby({ decrementby: 10 }));

export default test;
