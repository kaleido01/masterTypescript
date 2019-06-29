import { Sorter } from "./Sorter";
import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 4]);
numbersCollection.sort();
console.log(numbersCollection);

// const charactersCollection = new CharactersCollection("Xaayb");
// sorter.sort();
// console.log(sorter);
