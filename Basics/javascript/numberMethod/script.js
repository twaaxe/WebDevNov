// Number methoden voorbeelden

// Number methoden
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// Number to string
let num = 123;
console.log(num.toString(), ": this is a string"); // returns a string

// Number to fixed
console.log(num.toFixed(2), ": this is a string with 2 decimals"); // returns a string 

// Number to precision
console.log(num.toPrecision(2), ": this is a string X"); // returns a string

// Number to exponential
console.log(num.toExponential(2), ": this is a string X"); // returns a string

// Number to locale string
console.log(num.toLocaleString(), ": this is a string"); // returns a string

// Number to value of
console.log(num.valueOf(), ": this is a number"); // returns a number
var num2 = num.valueOf();
console.log("ValueOf num2 is : ",num2 ,typeof num2)

// Number to is integer
console.log(Number.isInteger(num)); // returns a boolean

// Number to is safe integer
console.log(Number.isSafeInteger(num)); // returns a boolean

// Number to is finite
console.log(Number.isFinite(num)); // returns a boolean

// Number to is NaN
console.log(Number.isNaN(num)); // returns a boolean


// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number