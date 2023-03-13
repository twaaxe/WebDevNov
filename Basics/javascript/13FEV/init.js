


const obj1 = {
    id:1
}
//const isAdmin = false
const isAdmin = new Boolean(false) // object
const Age = new Number(10);

console.log(typeof isAdmin, isAdmin)
console.log(Age, typeof Age.valueOf()) // Age.valueOf() =INT Age.valuOf()=object


const obj2 = new Object({domain:'google.com'})
// OOP 
// Object constructor
obj2.username="hln.be"
console.log(obj2)
const obj3 = new Object({username:'admin',password:'admin123',email:'root@root.com'})
// obj3.username="admin"
// obj3.password="admin123"
// obj3.email="root@root.com"

// console.log(obj3)

for(let key in obj3){
    console.log(obj3[key])
}

const x = {
    x : "csharp",
    y : "pyton",
    z : "cplusplus"
}

console.log(Object.keys(x))
// console.log(x.length)// undifined; canno reach he length of an OBJECT


const tools = {
    message : "hello world!",
    display : function(){
        // console.log("this is a funcion")
        console.log(this)
    }
}

tools.display()

function axel(name){
    console.log(name)
}

// axel("nnana")
const hello = new axel("ellosds")
hello.username = "dssfs";
console.log(hello.username)

