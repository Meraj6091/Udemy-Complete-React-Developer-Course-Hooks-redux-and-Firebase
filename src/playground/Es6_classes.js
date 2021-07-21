class Person {
	constructor(name = "kamal", age) {
		this.name = name;
		this.age = age;
	}
	description() {
		return `${this.name} is ${this.age} years Old`;
	}
}
class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}
	hasMajor() {
		return !!this.major;
	}
	getDescription() {
		let description = super.description();
		if (this.hasMajor()) {
			description = `${this.name} is ${this.age} and Their major is ${this.major}`;
		}
		return description;
	}
}
class Traveler extends Student {
	constructor(name, age, major, homelocation) {
		super(name, age, major);
		this.homelocation = homelocation;
	}
	haslocation() {
		return !!this.homelocation;
	}
	getgreeting() {
		let greeting = super.getDescription();
		if (this.haslocation()) {
			greeting += `im visiting from ${this.homelocation}`;
		}
		return greeting;
	}
}
const C = new Traveler(undefined, 21, "Software Engnieer", "colombo");
const B = new Traveler("Meraj", 21, "Software Engnieer", "colombo");
console.log(C.getgreeting());
console.log(B.getgreeting());
function Es6_classes() {
	return <div></div>;
}
export default Es6_classes;
