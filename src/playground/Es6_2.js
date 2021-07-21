import React from "react";
import { useState } from "react";
function Es6_2() {
	const user = {
		// name:'Meraj',
		// cities:['colombo','matar','jaffna'],
		// printplacelived: function() {
		//     this.cities.forEach((city) => {
		//         console.log(this.name+'has lived in' + city)
		//     })
		// }
	};
	const muliplayer = {
		numbers: [1, 2, 3],
		muliplyed() {
			return this.numbers.map((x) => x * 2);
		},
	};
	console.log(muliplayer.muliplyed());
	const [count, setCount] = useState(10);
	const Onpress = () => {
		setCount(count - 1);
		console.log(count);
	};
	const Reset = () => {
		setCount(10);
	};
	const Onpressplus = () => {
		setCount(count + 1);
		console.log(count);
	};
	//const [array, Setarray] = useState([1, 2, 3]);
	const [newarray, Setnewarray] = useState([]);
	const onformsubmit = (e) => {
		e.preventDefault(); //to stop the refresh
		const option = e.target.elements.option.value; // to get the value of the form
		if (option) {
			Setnewarray((array) => [...array, option]);
			e.target.elements.option.value = "";
		}
	};
	const Remove = () => {
		Setnewarray([]);
	};
	const render = () => {
		return (
			<h1>
				<p>{newarray.length}</p>
				Count : {count} <br />
				<button onClick={Onpressplus}>+1</button>
				<button onClick={Onpress}>-1</button>
				<button onClick={Reset}>Reset</button>
				<form onSubmit={onformsubmit}>
					<input type="text" name="option" />
					<button>Add</button>
				</form>
				<button onClick={Remove}>Remove</button>
			</h1>
		);
	};
	return <div>{render()}</div>;
}

class Options extends React.Component {
	render() {
		const title = "indician app";
		const subtitle ="put your life in the hands"
		return (
			<div>
				<Addoption title={title} subtitle={subtitle}/>
			</div>
		);
	}
}
class Addoption extends React.Component {
	render() {
		return (
			<div>
				<button>Addoption</button>
				<h2>{this.props.title}</h2>
			</div>
		);
	}
}

class three extends React.Component {
	render() {
		return (
			<div>
				<Options/>
			</div>
		);
	}
}
 

export default three;
