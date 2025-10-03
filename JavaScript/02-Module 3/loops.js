
var num = 110;

while(num === 100){
    console.log("Same Amount");
    break;
}

do{
    console.log("Same Amount");
    break;
}while(num === 100);

//for in loop 
var person = {
    name : 'Karthi',
    age : 24,
    hobby : 'coding'
}

for (var key in person){
    console.log(key + ": " + person[key]);
}

//for of loop
var arr = [10,20,30,40,50];
 for (var value of arr){
    console.log(value)
 }


//entrices method
var arr = [10,20,30,40,50];

for (let [key , value] of arr.entries()){
    console.log(key + "->" + value)
}

//for loop
 var arr = ['Karthi', 'Ravi', 'Arun', 'Vijay'];

 for (var i=0; i<=arr.length-1; i++){
    console.log(arr[i]);
 }
