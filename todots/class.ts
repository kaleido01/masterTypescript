class Vehicle {
	color: string = "red";
	constructor() {}

	protected honk(): void {
		console.log("b");
	}
}

class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super();
	}

	private drive(): void {
		console.log("object");
	}
	startDrive(): void {
		this.drive();
		this.honk();
	}
}

const car = new Car(1, "ffff");

car.startDrive();
