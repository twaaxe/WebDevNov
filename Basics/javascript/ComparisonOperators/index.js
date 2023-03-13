// Comparison Operators
var n1 = 5; // number
var n2 = 6;
var n3 = 5;
var n4 = "5" // string
// Equal to (==) Variable value 
// console.log(n1==n2) // is n1 equal to n2? incorrect/false
// console.log(n1==n3);

// Equal to (===) Variable value and variable data type
// console.log(n1 == n4) // control value only
// console.log(n1 === n4) // control value and data type

// Not Equal to operator (!=)
// console.log(n1!=n2) // true

// not equal operator with duble equal symbol (!==) // control value control type
// console.log(n1!==n4)

// greater than (>)
// console.log(n2>n1)
// console.log(6>5)
// console.log(9>12);
// console.log(12>10)

// less than (<)
// console.log(5<3)
// console.log(5<10)
// console.log(5<5)

// less than or equal
// console.log(5<=3)

// greater than or equal (>=)
// console.log(5>=5) // true
// console.log(5>=10) // false


// if(5<=10){
//     console.log("yes")
// }else{
//     console.log("no")
// }

var atilla = 17;
// if(atilla>17){
//     console.log("Free man")
// }else{
//     console.log('no he is not allowed!')
// }

// 18 - 29
// atilla >17 and atilla <30
// if((atilla>17) && (atilla <30)){
//     console.log("He can play football")
// }else{
//     console.log("No he is too young or too old")
// }


// or operator
// true || false
// var x1=5;
// var x2=6;
// if(x1>4 || x1<4){
//     console.log("Yes it trueee!!!")
// }else{
//     console.log("It is not correct!!!!")
// }

var x1 = 5;
var x2 = 6;
// if((10>20)){
//     console.log("True true")
// }

// console.log(!(10>20))

console.log(!(10 > 20))
console.log(!(10 == 10))


// ternary operator
// let GetResultOfRules = atilla>17 ? 'yes he can drink':'no he is too young'
// console.log(GetResultOfRules)

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// console.log(2%2==0) // even number


var isAdmin = false;
// ()
// const IsLoggedIn = isAdmin? 'Welcome Admin, you\'re logged in' : 'You are not authorized!'

// if(isAdmin){
//     console.log("You are admin")
// }else{
//     console.log("Standart user")
// }


var articles = []

let result = articles.length > 0 ? articles.map(item => item.title) : "Data is loading..."

console.log(result)

//  (condition) ? TRUEMESSAGE : FALSEMESSAGE

var x = false;
var y = true;
result = x ? y ? "Y is true" : "Y is false" : "X is false"
// result = x || y ? console.log("X is true and Y is also true!!") : console.log("False none of them is true")
console.log(result)
if (x) {

} else if (y) {

} else {

}

var _name = "atilla"


if(_name ==="atilla"){
    // do something
}else if(_name==="mohammad"){
    // do something else
}else if(_name==="ahmad"){
    // do another thing
}else{
    // do the default task
}
// CTRL + SHIFT + I

// console.log(IsLoggedIn);