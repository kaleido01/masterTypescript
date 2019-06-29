class ArrayOfNumbers {
	constructor(public collection: number[]) {}

	get(index: number): number {
		return this.collection[index];
	}
}

class ArrayOfAnything<T> {
	constructor(public collection: T[]) {}

	get(index: number): T {
		return this.collection[index];
	}
}

new ArrayOfAnything(["1", "4", "4"]);

function printStrings(arr: string[]): void {
	for (let index = 0; index < arr.length; index++) {
		console.log(arr[index]);
	}
}
function printAnything<T>(arr: T[]): void {
	for (let index = 0; index < arr.length; index++) {
		console.log(arr[index]);
	}
}

printAnything<string>(["3"]);

class Car {
	print() {
		console.log("I am a car");
	}
}

class House {
	print() {
		console.log("I am a house");
	}
}

interface Printable {
	print(): void;
}

function printCarOrHouse<T extends Printable>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		arr[i].print();
	}
}

printCarOrHouse<House>([new House(), new House()]);
printCarOrHouse<Car>([new Car(), new Car()]);
