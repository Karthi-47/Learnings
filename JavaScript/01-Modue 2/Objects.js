var car = {
    Name : "BMW",
    Price : 5000000,
    Color : "Black",

    owners: {
        Name: "HARIHARAN",
        Age: 21,
        Address: {
            City: "Chennai",
            State: "Tamilnadu"
        }
    },
    start: function () {
        console.log("Car started");
    }
    
}

console.log(car);

console.log(car.owners.Name);

console.log(delete car.owners.Age);

console.log(car);

console.log(car.start());

console.log(car.owners.Address.City);

console.log([car]);
