import { Sorter } from "./Sorter";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([10, 3, -5, 0, 4]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();

const charactersCollection = new CharactersCollection("Xaayb");
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(sorter);
