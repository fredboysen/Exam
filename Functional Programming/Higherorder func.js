// Higher-order function: takes a function as an argument
function applyOperation(a, b, operation) {
    return operation(a, b);
}
// Example functions to pass as arguments
function add(x, y) {
    return x + y;
}
function multiply(x, y) {
    return x * y;
}
// Using the higher-order function
console.log(applyOperation(5, 3, add));       // Output: 8
console.log(applyOperation(5, 3, multiply));  // Output: 15


// returns a function
function createMultiplier(multiplier) {
    return function(x) {
        return x * multiplier;
    };
}


// Using the function returned 
const double = createMultiplier(2);
const triple = createMultiplier(3);


console.log(double(5));  // Output: 10
console.log(triple(5));  // Output: 15