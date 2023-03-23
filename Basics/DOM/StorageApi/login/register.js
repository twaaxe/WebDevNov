const [username,password] = document.querySelectorAll('input')

const RegisterBtn = document.querySelectorAll('a')[1]
const EyeIcon = document.querySelector('.fa-eye-low-vision')

const getSessionStorageUser = ()=>JSON.parse(sessionStorage.getItem('user'))
// event
RegisterBtn.addEventListener('click',()=>{
    // create user object here
    const NewUser={
        "username":username.value,
        "password":password.value
    }
    let tempUsers = getSessionStorageUser();//arrayList
    //tempUsers = []
    console.log("NewUser: ", NewUser)
    console.log("TempUsers: ", tempUsers)
    console.log("TempUsers: ", tempUsers)
    
    if(username.value !=='' && password.value !==''){
        tempUsers.push(NewUser)
        // const ConvertObjToString = JSON.stringify(NewUser);
        // console.log(ConvertObjToString) //insert new ser data
        // sessionStorage.setItem('user',ConvertObjToString)
        console.log(tempUsers)
        sessionStorage.setItem('user', JSON.stringify(tempUsers))

        /*What have we done here?
        1 create the new user with the info the real user has entered
        2 get AL users in arrayList in a temp file
        3 create temp user file, contain the curent user info
        4 add the current user in the temp file(that contain already ALL the user)
        5 update the 'user' file in sessionStorage
        Done! Now you can make a website and record account 
         */
    }
})

EyeIcon.addEventListener('click',(e)=>{
    console.log(e.target)
    let typeOfPasswordInput = password.getAttribute('type') == 'password'? 'text':'password'
    console.log(typeOfPasswordInput)
    password.setAttribute('type',typeOfPasswordInput)

    if(typeOfPasswordInput =='text'){
        EyeIcon.classList.remove('fa-eye-low-vision')
        EyeIcon.classList.add('fa-eye-slash')
    }else{
        EyeIcon.classList.remove('fa-eye-slash')
        EyeIcon.classList.add('fa-eye-low-vision')
    }
    // closed eye: fa-solid fa-eye-slash
    // default: fa-solid fa-eye-low-vision

})



document.addEventListener('DOMContentLoaded',()=>{

    let users = getSessionStorageUser()
    console.log(users) //null when sessionStorageData is empty
    if(users ==null){
        sessionStorage.setItem('user', '[]')
    }


})












