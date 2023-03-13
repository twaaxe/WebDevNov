// QUEST1
var students=["John","Jane","Jim","Jill","Jack","Jenny","Jeremy","Jasmine","Jody","Jen"];
let studentLength = students.length;
console.log(studentLength);

// QUEST 2
 let firstStudent = students[0];
let lastStudent = students[studentLength-1];
console.log(firstStudent);
console.log(lastStudent);

// QUEST 4
let middleStudent;
if( studentLength % 2 == 0){
    middleStudent = "La combinaison du numero 5 ("+ students[studentLength/2 -1 ] + ") et du nomero 6 (" + students[studentLength/2] ;
} else {
    middleStudent = students[(studentLength-1)/2]
}
console.log(middleStudent);

// QUEST 5
var ages=[18,35,12,24];
let firstages= ages[0];
let ageLenght = ages.length;
let lastAge = ages[ageLenght-1];
let middleAge;
if( ageLenght % 2 == 0){
    middleStudent = "La combinaison du numero 2 ("+ ages[ageLenght/2 ] + ") et du nomero 3 (" + ages[ageLenght/2 +1]+" )";
} else {
    middleStudent = students[(studentLength-1)/2]
}
console.log(middleStudent);

var stringToAarray = "Split me into an array";
let arrayFromString = stringToAarray.split(' ');
console.log(arrayFromString);

//QUEST8
var letters ="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"; // convert it to array list
let arr = letters.split(',');
console.log("la valur du new array est de: " + arr);


//QUEST9
var names = "john-jane-jim-jill-jack-jenny-jeremy-jasmine-jody-jen"; // convert it to array list
let arrayFromLetters  = names.split("-");
console.log(arrayFromLetters);









