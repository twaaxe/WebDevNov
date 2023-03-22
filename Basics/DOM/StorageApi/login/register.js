/*

const [username,password] = document.querySelectorAll('input')

const RegisterBtn = document.querySelectorAll('a')[1]

// event
RegisterBtn.addEventListener('click',()=>{
    // create user object here
    const NewUser={
        "username":username.value,
        "password":password.value
    }
    console.log(NewUser)
    if(username.value !=='' && password.value !==''){
        const ConvertObjToString = JSON.stringify(NewUser);
        console.log(ConvertObjToString)
        sessionStorage.setItem('user',ConvertObjToString)
    }
})

*/