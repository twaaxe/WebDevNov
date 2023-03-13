/**
 *1create a an array
 *2create a function that add user if not existing
 *3create function login if username and passord exist
 *4function that create new post if user is logged
 *5 function that delete post if user is logged
 *6funciton that fetch all post
*/

//QUEST1
let newArray =[];

//QUEST2
function addUser(user, mail, pswd){

    let isPresent;

    newArray.forEach(function(item){
        if(item.name ==user){
            isPresent = true;
            console.log(`the name ${user} already exist`)
        }
    })

    if(!isPresent){
        newArray.push({
            name : user,
            email : mail,
            password : pswd,
            post : []
        })
    }
    console.log(newArray)
}

/*
addUser("user1","@mail.com","thepswrd20" )
addUser("user18","@mail.com","thepswrd8" )
addUser("user7","@mail.com","thepswrd77" )
*/


//QUEST3
function login(username, password){
    //separate in 3; check username  - checkif they match the password ON TAHT ITEM

    let isPresent;
    newArray.forEach(function(item){
        if(item.name ==username){
            isPresent = true; 
        }
    })


    newArray.forEach(function(item){ //works fine with array.filter
        if(isPresent && item.name == username){ //username: §metre de this.fonction
            if(item.password == password){
                console.log("you are logged");
            } else {
                console.log("wrong credidential")
            }
        }
    })
}

//login("user18", "thepswrd77")

//QUEST4

/*
CHECK IF USER EXIST - CHECK IF LOGGED - CREATE NEW POST
*/











