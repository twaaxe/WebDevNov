const [username, password] = document.querySelectorAll('input')

const [login] = document.querySelectorAll('a')

const loading = document.querySelector('.loading')
login.addEventListener('click', (e)=>{

    //we create an object that will be sent to the database, for now database = LocalStorage
    const userObj = {
        username:username.value,
        password:password.value
    }
    console.log(userObj)
    
  //user data from db
    const userDb = JSON.parse(sessionStorage.getItem('user2'))
    
    loading.innerText="Logging in ... please wait"

    setTimeout(()=>{

        if(userObj.username == userDb.username && userObj.password == userDb.password){
            loading.innerText="Welcome"
            loading.classList.remove('text-light')
            loading.classList.remove('text-danger')
            loading.classList.add('text-success')
            alert('welcome user '+ userDb.username)
        } else {
            loading.classList.remove('text-light')
            loading.classList.remove('text-success')
            loading.classList.add('text-danger')
            alert('combinaison incorrect')
            loading.innerText="User is not logged in"
            setTimeout()
        }
    }, 500)

    
    

})