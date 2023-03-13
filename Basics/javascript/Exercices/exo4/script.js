//COULDN'T FINISH EXO7




// //QUEST 1
for (var i=0; i<=20; i++){
    console.log(i);
};

//QUEST2

for (var i=20; i>=0; i--){
    console.log(i);
};

console.log("---------------------------");

//QUEST3
for (var i=0; i<=100; i++){
    if(i%2 ==0){
        console.log(i + " : even number");
    } else {
        console.log(i);
    }
};

//quest student

var students =[
    {
        name: "John",
        track: "Front End Development",
        achievements: 157,
        points: 14730
    },
    {
        name: "Jenny",
        track: "iOS Development with Swift",
        achievements: 175,
        points: 16375
    },
    {
        name: "Jill",
        track: "PHP Development",
        achievements: 203,
        points: 19072
    },
    {
        name: "Jack",
        track: "Back End Development",
        achievements: 181,
        points: 19215
    },
    {
        name: "Jasmine",
        track: "Front End Development",
        achievements: 157,
        points: 14730
    }

]


//QUEST4
let highestPoint = 0;
let name = "";

students.forEach(function(objet){
    //save the highset point
    if (objet.points > highestPoint){
        highestPoint= objet.points;
    }
});
    //find the name
    highestName =students.find(array => array.points == highestPoint);
    name = highestName.name;
// console.log(name);




//QUEST5
function print(student){
   console.log( students.find(array => array.name == student ) );
}


//QUEST6
// print(name);

//QUEST7

