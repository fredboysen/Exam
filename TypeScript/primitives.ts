// Primitive Types
let age: number = 25;
let fullname: string = "John Doe";
let isStudent: boolean = true;
let nothing: null = null;
let unknownValue: undefined = undefined;

// Array Types
let scores: number[] = [90, 85, 88];
let names: string[] = ["Alice", "Bob", "Charlie"];

// Function Types
let greet: (name: string) => string;
greet = function (name: string): string {
    return `Hello, ${name}!`;
};

let plus: (a: number, b: number) => number;
plus = function (a: number, b: number): number {
    return a + b;
};

// Object Types
let student: { name: string; age: number; isStudent: boolean };
student = {
    name: "Jane Doe",
    age: 28,
    isStudent: false,
};

// Union Types
let id: number | string;
id = 101;    
id = "A123"; 

let value: number | boolean | string;
value = 10;       
value = true;     
value = "hello";  

// Intersection Types
type nameAge = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    department: string;
};

let employee: nameAge & Employee;
employee = {
    name: "John Smith",
    age: 30,
    employeeId: 12345,
    department: "Engineering",
};
