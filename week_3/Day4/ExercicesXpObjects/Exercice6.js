// Arrays and objects are compared by reference
//console.log([2] === [2]); // false
//console.log({} === {}); // false
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number); // 4: object2 references the same object as object1.
console.log(object3.number); // 4: object3 also references that same object.
console.log(object4.number); // 5: object4 is a separate object.

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    sound(animalSound) {
        return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));