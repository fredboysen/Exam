
// Define simple abilities as objects
const canRun = {
  run: function() {
      console.log("Running fast!");
  }
};

const canJump = {
  jump: function() {
      console.log("Jumping high!");
  }
};

// Function to copy abilities to a target object
function mixAbilities(target, ...abilities) {
  Object.assign(target, ...abilities);
}

// Create a new object
const rabbit = {};

// Add run and jump abilities to the rabbit
mixAbilities(rabbit, canRun, canJump);

// Now the rabbit can use the run and jump methods
rabbit.run();  // Output: Running fast!
rabbit.jump(); // Output: Jumping high!


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

