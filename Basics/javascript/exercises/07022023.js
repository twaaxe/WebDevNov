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
     //   console.log(id)
        newUser.id=id
        users.push(newUser)
    //    console.log(newUser)
    }else{
        id = users[users.length-1].id
       // console.log("Position Index Number",users.length-1)
        id++
        newUser.id=id
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
    fullname:'Mike Doe',
    username:'mike',
    email:'mike@john.com',
    password:'mike123'
})

const DelUserById = id=>{
    let findUser = users.findIndex(function(user){
        return user.id===id
    })
    if(findUser!==-1){
        users.splice(findUser,1)
    }else{
        console.log(`user ${id} not found`)
    }
}

// DelUserById(20)
// User id is not equal to array position number

// update user data
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

updatebyid(2,'email','random@random.com')
updatebyid(2,'password','asd123')
console.log(users)