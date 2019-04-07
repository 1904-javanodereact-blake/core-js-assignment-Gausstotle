/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let firstObject = {
    name: 'Bradley',
    age: 24,
    a: 1,
    b: 2,
    c: 3,
}

console.log(firstObject)

function Dog(name,age,breed) {
    this.name = name;
    this.age  = age;
    this.breed = breed;

}
let fido = new Dog('Fido',10, "Rotweiler")
console.log(fido)

class Cat {
    constructor(name, age, owner){
        this.name = name;
        this.age = age;
        this.owner = owner;
    }
}

console.log(new Cat("mr.bigglesworth",10, "drevil"))