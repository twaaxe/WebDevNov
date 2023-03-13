/*
var isAdmin = true;

const isLoggendIn = isAdmin===true ? "you are logged" : "you are not autorize";
// console.log(isLoggendIn)

var obj1 =[
    {name: 'axeln',
    f_name : "zczf"},
    {name:"george",
    f_name : "azswxz"},
    {name: 'apoakd',
    f_name : "ezaeg"},
    {name:"aeoASErgn",
    f_name : "azsDDwxz"}
]

// obj1.map(function(x){
//     console.log(x)
// });

// var result = obj1.length>2 ? obj1.map(x => x.name) : "Data is loading" ;


const x=true;
const y = false;
const z = true;
// var result = (faux || vrai) ? "first statement" : "false statement";
var result = x ?  "x is true"  : y ? "y is true" : z ? "z is true" : "nothing"


// console.log(result);
obj1.map(function(item, index){

    //looking for a ame beginine with specified letter
    if(item.name.toLowerCase().trim().startsWith('a') && item.name.toLowerCase().trim().endsWith('n')){
        // console.log(item.name);
        
    }
    
})


*/



// find person who is employee
var persons =
    [{
        "username": "employee-tbuy0"
    }, {
        "username": "hupham1"
    }, {
        "username": "ugottelier2"
    }, {
        "username": "employee-lbrager3"
    }, {
        "username": "laugustin4"
    }, {
        "username": "psagerson5"
    }, {
        "username": "employee-lgregoletti6"
    }, {
        "username": "jgiovanazzi7"
    }, {
        "username": "employee-tstefi8"
    }, {
        "username": "dbleby9"
    }]

    
    let arr = persons.forEach(function(singlePerson){
        if(singlePerson.username.includes('employee')){
            console.log( singlePerson.username)
        }
        
    })


    