// 1. Create an array of objects with the following properties and values (10 objects)
 
// Note: 3 of objects email should be @gmail.com and 3 of objects email @yandex.com and 4 of objects email should be @hotmail.com
// Note: 3 of objects city should be Brussel and 3 of objects city should be Istanbul and 4 of objects city should be Ghent
 
/*
 name: string
 age: number
 email: string
 city: string
 phone: string
*/
 
// 2. Create a function that can find the persons less than 30 years old.
 
// 3. Create a function that can find the persons who live in the same city.
 
// 4. Create a function that can find the persons who have gmail email.
var arrList = [
    {
        name: "NAME1",
        age: 37,
        email: "string3@gmail.com",
        city: "Istanbul",
        phone: "001122311",
    },
    {
        name: "NAME2",
        age: 37,
        email: "string2@gmail.com",
        city: "Istanbul",
        phone: "001122311",
    },
    {
        name: "NAME3",
        age: 37,
        email: "string1@gmail.com",
        city: "Istanbul",
        phone: "001122311",
    },
    {
        name: "NAME_X",
        age: 37,
        email: "string_X@gmail.com",
        city: "Istanbul",
        phone: "001122311",
    },
    {
        name: "NameName",
        age: 19,
        email: "string1@yandex.com",
        city: "Ghent",
        phone: "001122311",
    },
    {
        name: "NameName",
        age: 19,
        email: "string2@yandex.com",
        city: "Ghent",
        phone: "001122311",
    },
    {
        name: "NameName",
        age: 19,
        email: "string3@yandex.com",
        city: "Ghent",
        phone: "001122311",
    },
    {
        name: "Name4Name",
        age: 23,
        email:"string1@hotmail.com",
        city: "Brussel",
        phone: "001122311",
    },
    {
        name: "NameName",
        age: 23,
        email: "string2@hotmail.com",
        city: "Brussel",
        phone: "001122311",
    },
    {
        name: "NameName",
        age: 37,
        email: "string3@hotmail.com",
        city: "Brussel",
        phone: "001122311",
    }
    
];

// console.log(arrList);



function byAge(){
    arrList.forEach(function(item){
        if (item.age < 30){
            console.log(item);
        }
    })
}

// byAge()

function sameCity(){
    arrList.forEach(function(item){
        var azzer = [];
        arrList.map(function(iteMap){
            if(item == iteMap){
                console.log(item);
                // azzer.push(item);
            }
        })
        // return azzer;
    })
}


// console.log(sameCity())
// sameCity();



function gMail(){
    arrList.forEach(function(item){
        if (item.email.includes('gmail.com')){
            console.log(item);
        }
    })
}

gMail();




