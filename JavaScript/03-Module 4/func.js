// function 

// function add(a,b){
//     // console.log("Sum is", a+b);
//     return a+b;
// }

// let result = add(5,10);
// console.log(result); // 15

// hoisting means calling the function before its declaration
console.log(multiply(5,10)); // 50

function multiply(a,b){
    return a*b;
}

// Example for funtion declaration and function expression

// Function Declaration
function divide(a, b) {
    return a / b;
}

// Function Expression
const subtract = function(a, b) {
    return a - b;
};
console.log(divide(10, 2)); // 5
console.log(subtract(10, 2)); // 8

