var students=["John","Jane","Jim","Jill","Jack","Jenny","Jeremy","Jasmine","Jody"];
var result = students;


result = students.toString();
result = students.join("{}");  // return a string join with the $metres

students.push("Axel");
students.push(20);
students.push(true);
students.push({
    id:1,
    name:"jimmy"
});

students.pop();// remove the last item
result=students;

students.shift();
students.unshift("firstPlace");     //unshift() insert first in the array list



console.log(`result is \n ${result}\ntypeof data is ${typeof result}`) //blackslashN give new line

console.log(students[9]);
delete students[9];
console.log(students);
var n1 = [1,2,3];
var n2 = [4,5,6];
console.log(n1.concat(n2));

console.log(students, students.length)
students.splice(5,3, "hello ", "world"); //from 5 delete  3, you can replace it with smtgh if needed 
console.log(students,  students.length)
 

//TRIER DES NOMBRES
var number = [2,6,9,23,65,74,12,36,95,14];
result = number.sort(function(x,y){
    return x-y;
})

console.log(result);

//FOR EACH
students.forEach(function(value, index){
    console.log(`ID: ${index}\nValue: ${value}`)
})

console.log(`Result is\n${result}\ntypeof data is ${typeof result}`)


//array.map
var scores = [2,6,9,23,65,74,12,36,95,14];
scores.reduce(function(acc, val){
    console.log(acc, "+ acc", val, "= val");
    return acc +=val;
})
console.log(scores.includes(44));
console.log(scores.includes(14));
console.log(scores.indexOf(23));


