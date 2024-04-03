
import Dog from "./Dog";
import { get12, get13 } from "./utils";
import ShelterDog from "./ShelterDog";

const elton = new Dog();
elton.bark();

console.log(get12());
console.log(get13());

const roi = new ShelterDog();
console.log(roi);