
//CONCAT
const myCar = Car("Toyota", "Camry", "blue");
myCar.start(); // Output: Toyota Camry is starting.
myCar.drive(); // Output: The blue Toyota Camry is driving.

const Animal = {
  init(type, sound) {
    this.type = type;
    this.sound = sound;
  },
  speak() {
    console.log(`${this.type} says ${this.sound}`);
  },
};
const dog = Object.create(Animal);
dog.init("Dog", "Woof");
dog.speak(); // Output: Dog says Woof

//LAV DEN HER Omm

