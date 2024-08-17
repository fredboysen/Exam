 // Constructor function
 function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Creating an object using the constructor function
const alice = new Person('Alice', 30);
console.log(alice.name); // Output: Alice
console.log(alice.age);  // Output: 30


// Adding a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// All instances of Person can now use the greet method
alice.greet(); // Output: Hello, my name is Alice


// Defining a class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// Creating an object using the class
const bob = new Person('Bob', 25);
console.log(bob.name); // Output: Bob
console.log(bob.age);  // Output: 25

// Using the method
bob.greet(); // Output: Hello, my name is Bob
