const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const greetFunction = person.greet;
greetFunction(); // Undefined or global object (depending on strict mode)

const boundGreet = person.greet.bind(person);
boundGreet(); // Logs: 'Hello, my name is Alice'
