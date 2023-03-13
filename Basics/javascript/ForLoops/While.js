// while loop
// var age = 20;
// var i=0;
// while(i<=20){
//     i++;
//     // do something here
//     console.log(i)
// }

// let numbers=[44,55,66,77,88,99];
// let index=0;
// while(index<numbers.length){
//  // do something
//  console.log(numbers[index])
//  index++;
// }

let students=[
    {
        id:1,
        name:'john',
        email:'john@micropsoft.com'
    },
    {
        id:2,
        name:'john1',
        email:'john1@micropsoft.com'
    },
    {
        id:3,
        name:'john2',
        email:'john2@micropsoft.com'
    }
]

// let index=0;
// while(index<students.length){
//     console.log(students[index].email)
//     index++
// }

// do while loop

// var index=0;
// var endPoint=10;
// do{
// // do something here
// console.log(index,'this is do while')
// index++
// }while(index<endPoint)

function BipBip(){
    console.log("Runnnnn")
}

var index=2;
var endpoint=2;

while(index<endpoint){
    BipBip();
    index++
}
 // index<endpoint > false
do{
    BipBip()
    index++
}while(index<endpoint)