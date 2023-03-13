// 1. Create an array of objects with the following properties and values (10 objects)
 
/*
 name: string
 age: number
 email: string
 city: string
 phone: string
*/

// Note: 3 of objects email should be @gmail.com and 3 of objects email @yandex.com and 4 of objects email should be @hotmail.com
// Note: 3 of objects city should be Brussel and 3 of objects city should be Istanbul and 4 of objects city should be Ghent


const users = [{
    "name": "Raphaela McArd",
    "age": 38,
    "email": "rmcard0@gmail.com",
    "city": "Brussel",
    "phone": "1267846023"
  }, {
    "name": "Jacquetta Ghidetti",
    "age": 23,
    "email": "jghidetti1@yandex.com",
    "city": "Ghent",
    "phone": "4178001277"
  }, {
    "name": "Johann Pomery",
    "age": 26,
    "email": "jpomery2@yandex.com",
    "city": "Brussel",
    "phone": "6164505687"
  }, {
    "name": "Lynnelle Hunter",
    "age": 28,
    "email": "lhunter3@gmail.com",
    "city": "Ghent",
    "phone": "3979350742"
  }, {
    "name": "Dinnie Bentjens",
    "age": 32,
    "email": "dbentjens4@hotmail.com",
    "city": "Istanbul",
    "phone": "8343784145"
  }, {
    "name": "Genna Pockett",
    "age": 33,
    "email": "gpockett5@yandex.com",
    "city": "Ghent",
    "phone": "1612059397"
  }, {
    "name": "Dino De Wolfe",
    "age": 31,
    "email": "dde6@yandex.com",
    "city": "Brussel",
    "phone": "6552923737"
  }, {
    "name": "Nadean Remnant",
    "age": 30,
    "email": "nremnant7@gmail.com",
    "city": "Istanbul",
    "phone": "5677908472"
  }, {
    "name": "Gabi Lockier",
    "age": 30,
    "email": "glockier8@hotmail.com",
    "city": "Ghent",
    "phone": "6282567384"
  }, {
    "name": "Hans Coram",
    "age": 20,
    "email": "hcoram9@hotmail.com",
    "city": "Brussel",
    "phone": "6119243789"
  }]
 
// 2. Create a function that can find the persons less than 30 years old.
function FindUsersByAge(age,arraydata){
    return arraydata.filter(function(obj){
        return obj.age<age
    })
}

// console.log(FindUsersByAge(25,users))
// const CityInput = document.getElementById("city")
// 3. Create a function that can find the persons who live in the same city.
function FindUsersByCity(city){
    return users.filter(function(obj){
        return obj.city.includes(city)
    })
}

// function ClickHandler(){
//     console.log(FindUsersByCity(CityInput.value));
// }
const cities=['Istanbul','Brussel','Ghent']
let result = users.map(function(person){
    return cities.map(city=>person.city===city?person:'')
})

// console.log(result)
 
// 4. Create a function that can find the persons who have gmail email.
function FindByEmailDns(domain){
    return users.filter(function(user){ // return new filtered array
        return user.email.includes(domain) // @gmail.com or @hotmail.com or @yandex.com
    })
}

console.log(FindByEmailDns('yandex'));
