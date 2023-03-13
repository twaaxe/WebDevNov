// simple function

/*
function affiche(){
    console.log("fonction affiche");
}

affiche();

//another function

var result;
function retourn(){
    return 7;
}
result = retourn();
console.log(result);
*/


const output = document.getElementById('output')

/*
function Add() {
    return 'Test value'
}

function AddMessage() {
    console.log('This is test value')
}

console.log(Add())
const result = Add()
console.log(result)
AddMessage()
output.innerHTML='<h1>Hello<h1>'

*/

/*function AddMessageInDocument (message){
    output.innerHTML = `<h1> ${message} </h1>`
}

AddMessageInDocument('microsoft');

let myname = "micro";
myname+= "soft";
console.log(myname);
*/


/*
let users=[];
function CreatAccount(username, password, email, role){
     const obj = {
        user: username,
        pass:password,
        email:email,
        App_Role:role
     }
     return users.push(obj);
}

const user1 = CreatAccount('root','psword','ding@gmail.com','sudo');
const user2 = CreatAccount('rAAt','pswArd','dANGg@gmail.com','sAdo');
const user3 = CreatAccount('AZERT','paaaaswo','ding@yahoo.com','21');

console.log(users);
console.log(users[2]);
console.log(users[2].email);
*/



/*
let users = [];
function SendSaveObj(obj){
    //store user in a database

  users.push(obj);
  console.log(users);
    
}

function MakeAccount(obj){
    //take user object data
    return SendSaveObj(obj);
}

//MakeAccount NEED! an object in parameters --> MakeAccount( {OBJ} )
MakeAccount({
    user:'root'
});

MakeAccount({
    user:'rAAt'
});

MakeAccount({
    user:'toor'
});
*/




//Contact aoo 

let deDatabase = [];

function NewContact(name, phone, email){
    let contact = {
        name: name,
        phone: phone,
        email: email,
    }
    return ContactApp(contact);
}

function ContactApp(contact){

    deDatabase.push(contact)
    console.log(deDatabase);

}

NewContact('Axel', 'Twag', 'MyMail');
NewContact('Ange', 'Lea', 'HersMail');













