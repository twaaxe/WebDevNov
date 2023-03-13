// Blog CMS crud

// 1. Create an array 
const users = [{ id: 1, username: 'root', password: 'admin123' }, { id: 2, username: 'admin', password: 'admin123' }]
const posts = []

// 2. Create a function that can add new user if user username is not exist

// 3. Create a function that can login user if user username and password is exist and correct 

// 4. Create a function that can create new post if user is login

// 5. Create a function that can delete post if user is login

// 6. Create a function that can fetch all posts.

const AddUser = user => {
    let userindex = 0;
    let found = users.map(single => single.username === user.username)
    // [false, true]
    if (found.includes(true)) {
        console.log('username already taken')
    } else {
        console.log('Username is available and make an account')
        // insert your new account here
        userindex = users[users.length - 1].id // get last object from array prop id // 2-3-4
        userindex++ // from 2 to 3
        user.id = userindex // create id property and store new id 
        users.push(user) // insert new user into users list
    }
}

const UserAuth = user => { // 
    // {username:'root','password':'asdasd123'}
    let isLoggedIn = users.filter(single => single.username === user.username && single.password === user.password);
    return isLoggedIn.length !== 0 ? true : false
}

// condition ? console.log('asdajsdiadjiajd'):console.log('user or password is incorrect')

AddUser({
    username: 'mike',
    password: 'atilla123'
})

AddUser({
    username: 'george',
    password: 'atilla123'
})

console.log(UserAuth({
    username: 'linux',
    password: 'atilla123'
}));


function CreatePost(post,userdata) {
    let postindex = 0;
    if (posts.length !== 0) {
        postindex = posts[posts.length - 1].id // get last object from array prop id // 2-3-4
        postindex++ // from 2 to 3
        
    } else {
        postindex = 1

    }
    // post is parameter variable
    let isLoggedIn = UserAuth(userdata) // verify that user logged in
    if(isLoggedIn){
        post.id = postindex
        posts.push(post)
    }else{
        // user is not logged in
        console.log('User is not logged in, please login with your account')
    }
}

// const CreatePost = post => {
//     let isLoggedIn = UserAuth({username:'michael',password:'atilla123'}) // verify that user logged in
//     if(isLoggedIn){
//         posts.push(post)
//     }else{
//         // user is not logged in
//         console.log('User is not logged in, please login with your account')
//     }
// }

CreatePost({title:'lorem ipsum',body:'this is new post data'},{
    username:'george',
    password:'atilla123'
})

CreatePost({title:'lorem ipsum',body:'this is new post data'},{
    username:'george',
    password:'atilla123'
})
// console.log(users);


function DeletePost(postid,userdata) {
    let isLoggedIn = UserAuth(userdata) // verify that user logged in
    if(isLoggedIn){
        let postindex = posts.findIndex(single => single.id === postid)
        posts.splice(postindex,1)
    }else{
        // user is not logged in
        console.log('User is not logged in, please login with your account')
    }
}

DeletePost(1,{
    username:'george',
    password:'atilla123'
})



console.log(posts);