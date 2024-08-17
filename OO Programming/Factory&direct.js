//Factory object creation function

function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    },
  };
}  

const user = createUser('Charlie', 28); user.greet();



//direct object creation (Object literal)

const game = {
    title: 'Pokemon:',
    subtitle: 'FireRed',
    start() {
        console.log(`Playing ${this.title} ${this.subtitle}`);
    }
};

game.start();




