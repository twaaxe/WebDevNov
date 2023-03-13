// CRUD Application 
// create data in database 
// delete data by id in database
// update data by id in database

/*
fullname,username,email,password
*/

let users = [];

const AddNewUser = newUser=>{
    let id=0;
  
    if(users.length===0){
        id++
        // console.log(id)
        newUser.id=id
        users.push(newUser)
        console.log(newUser)
    }else{
        id = users[users.length-1].id
        // console.log("Position Index Number",users.length-1)
        id++
        newUser.id = id;
        console.log(newUser)
        // console.log({
        //     id:id,
        //     user:'admin'
        // }) // insert
        users.push(newUser)
    }
    // insert new user object
}

AddNewUser({
    fullname:'John Doe',
    username:'john',
    email:'john@john.com',
    password:'john123'
})

AddNewUser({
    fullname:'Johny Dy',
    username:'Dyj',
    email:'john@DYE.com',
    password:'john444'
})

AddNewUser({
    fullname:'AXEL',
    username:'DACEyj',
    email:'john@DYE.com',
    password:'john444'
})

AddNewUser({
    fullname:'NINA Dy',
    username:'ANIN',
    email:'NINA@DYE.com',
    password:'john784'
})

// console.log(users);



const delUserById = id => {
    //on trouve l'user correspondant à l'ID donnée
    let findUser = users.findIndex(function(user){
        return user.id ===id
    })

    // console.log(findUser);
    console.log("we need to delete that : " + users[id].fullname)
    users.splice(findUser, 1);
    console.log(users)
}




console.log("now let's delete one item")
delUserById(1)

//update user data

const updatebyid = (id,propname,newvalue)=>{
    const UserIndex = users.findIndex(user=>user.id===id) // find pos number of user
    // console.log(users[UserIndex])
    // console.log(users[UserIndex][propname])
    
    if(UserIndex !==-1){
        users[UserIndex][propname] = newvalue
    }else{
        console.log('Data not found!')
    }
}

// updateById(0, "fullname", "THATSAMFNAME");







