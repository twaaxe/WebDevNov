/* Exercise 1 operators */

let snackServings = 10;
let guests = 20;
let sub2 = snackServings+ guests;
let sub3 = guests - snackServings;
let sub4 = snackServings*guests ;
let sub5 = snackServings/guests;
// question 6
let drinks = 10;
let resultOne = (snackServings*guests)/drinks;
console.log(resultOne);

// question 7
let monkeys = 15;
let bananas = 9;
let sub7 = monkeys/bananas

// question 8
let monkeyfights = 20;
let resultTWO = (monkeys + bananas ) *monkeyfights;
//question 9-12
monkeys++;
bananas--;
let happiness = bananas-monkeys;
happiness++;
monkeyfights++;

//question 13
let orderHasShipped = false;
if(orderHasShipped){
    console.log("The order shipped");
} else  {
    console.log("The order did not ship");
}

/*
Exercise 2 data types 
boolean/number/string/array/object
*/

let test = true;
let message = "";
let undefinedVariable = undefined;
let nullVariable = null;
let sampleNumber = 2;
console.log(typeof sampleNumber);
let students = [];
let sampleArray = new Array(5);
console.log(sampleArray[2]);
let sampleObject = {
    name: "Axel"
};

console.log(sampleObject.name);
let car ={
    model: "Honda Civic"
};

console.log(car.model);






