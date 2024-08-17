
function multiply(a, b) {
    return a * b;
}

console.log(multiply(3, 4)); // Output: 12
console.log(multiply(3, 4)); // Output: 12 (same input, same output)


//IMPURE Example
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDice()); // Output: Random number between 1 and 6
console.log(rollDice()); // Output: Random number between 1 and 6 (different each time)
