import faker from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
	companyName: string;
	catchCopy: string;
	location: {
		lat: number;
		lng: number;
	};
	color: string = "blue";

	constructor() {
		this.companyName = faker.company.companyName();
		this.catchCopy = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		};
	}

	markerContent(): string {
		return `
    <div>
    <h1>
    Company name ${this.companyName}
    </h1>
    <h3>
    Catch copy ${this.catchCopy}
    </h3> 
    </div>
    `;
	}
}
