import "./App.css";

function App() {
	const App = {
		title: "React Course",
		age: 18,
		location: "malabe",
		SubTitle: "React master",
		option: ["one", "two"],
	};
	function getLocation(location) {
		if (location) {
			return <p>Location : {location}</p>;
		}
	}
	return (
		<div>
			<ol>
				{App.option.map((number) => {
					return <li key={number}>{number}</li>;
				})}
			</ol>
			<h1>{App.title}</h1>
			{App.SubTitle && <p>{App.SubTitle}</p>}
			{App.option.length !== 0 ? (
				<p>Here are your options</p>
			) : (
				<p>No options</p>
			)}
		</div>
	);
}

export default App; // so we can use it elseweare
//{null} , {undifine} are ignore by JSX
