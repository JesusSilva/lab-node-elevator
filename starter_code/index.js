const Elevator = require('./elevator.js');
const Person = require('./person.js');

const myElev = new Elevator();
myElev.start();

let pepe = new Person("pepe", 5, 10);
let juan = new Person("juan", 9, 8);
let manu = new Person("manu", 2, 6);
myElev.call(pepe);
myElev.call(juan);
myElev.call(manu);