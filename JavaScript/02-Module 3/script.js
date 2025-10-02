//Condition Statements

// var Score = 95;

// if (Score >= 90) {
//   console.log("A Grade");
// } else if (Score >= 80) {
//   console.log("B Grade");
// } else {
//   console.log("C Grade")
// };

var arr = [10, 20, 30, 40, 50];
var result = [];

for (let i=0; i<arr.length; i++) {
    result.push(arr[i] * arr[i]);
}

console.log(result);