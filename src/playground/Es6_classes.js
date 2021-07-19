class Person {
	constructor(name = 0, age = 0) {
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
const C = new Student("Meraj", 21, "Software Enginner");
const A = new Person("Meraj", 23);
const B = new Person();
console.log(C.getDescription());
function Es6_classes() {
	return <div></div>;
}
export default Es6_classes;
