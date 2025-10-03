# Learning Javascript

### Day 1
1. Getting Started ✔
2. Basics of JavaScript ✔
3. Conditional and Control Statements ✔
4. Functions in JavaScript ✔
### Day 2
5. ES6
6. Functional Programming
7. Object Oriented JavaScript
8. Asynchronous JavaScript
9. Miscellaneous Topics

## Introdunction [Module-1]
* High Level
* Multi Paradigm
* Object Oriented Programming Language
* Syncronous - Executes Line by Line

## Node JS
* Open Source (Windows , MacOS , Linux)
* Cross Platform
* Javascript Runtime Environment

## Basics of JavaScript [Module-2]
### Variables in JavaScript
* Variables are containers for storing data.
* A data can be changed later on.
* Ex : let name = "John";

### Arrays in JavaScript
* Similar to a Variable but an array store multiple data in a single variable.
* Ex : let names = ["John", "Jane", "Jack"];
* Arrays provides you an ordered collections of data.
### Inbuit Array Methods
* There are Four Methods
    * push () - Adds an element to the end of an array
    * pop () - Removes the last element from an array
    * shift () - Removes the first element from an array
    * unshift () - Adds an element to the beginning of an array

### Objects in JavaScript
* In Javascript object is an unordered collection of key value pairs.
* Each key value pair is called property.
* Syntax for creating an object is {key : value}
* Example : 
```
var Car = { name : "BMW" , price : 5000000 , color : "Black" }
```

## Conditional and Control Statements [Module-3]
### Conditional Statements(if ,else , else-if)
```
if (condition1) {
    // code if condition1 is true
} else if (condition2) {
    // code if condition2 is true
} else {
    // code if none of the above are true
}
```
### The For Loop
* Initialization → runs once at the beginning (usually declare a counter).

* Condition → checked before every iteration (loop runs while true).

* Increment/Decrement → updates the counter after each iteration.

* Syntax :

```
for (initialization; condition; increment/decrement) {
    // code to be executed in each iteration
}
```
### While loop
* A pre-test loop → condition is checked before running the code block.
* Syntex :
``` 
while (condition) {
    // code to be executed as long as condition is true
}
```
### do while loop
* A post-test loop → the code block executes at least once, then the condition is checked.
* Syntex :
```
do {
    // code to be executed at least once
} while (condition);
```
### for-in loop
* for-in loops allows you to loop through the properties of an object.
```
for (variable in object) {
    // code to execute for each property
}
```
* Example :
```
let person = {
    name: "Karthi",
    age: 22,
    city: "Chennai"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
```
#### Output :
```
name: Karthi
age: 22
city: Chennai
```
## Functions In JavaScript
* A Function is a block of code designed to perform a particular task.
* Functions are reusable and can be called multiple times.
* Syntax :
```
function functionName(parameters) {
    // code to be executed
}
```
* Example :
```
function greet(name) {
    return "Hello, " + name + "!";
    console.log(greet("Karthi")); 
}   

Output: Hello, Karthi!
```
* **Function Declaration :** A function defined with the function keyword and a name, ready to use anywhere in its scope.

* **Function Expression :** A function assigned to a variable, usable only after the assignment.

* **Hoisting :** JavaScript’s behavior of moving function and variable declarations to the top of their scope before execution.


