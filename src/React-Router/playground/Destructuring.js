import React from "react";
export const test = () => {
	return <div></div>;
};
const book = {
	title: "Ego is the Enemy",
	author: "Ryan Holiday",
	publisher: {
		name: "Penguin",
	},
};

const { name: publisher = "Self-Published" } = book.publisher;
if (publisher) {
	console.log(`The name of the Book Publish by ${publisher}`);
}

// array destrucring
const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [product, , , Sprice] = item;
console.log(`A medium ${product} price is ${Sprice}`);
