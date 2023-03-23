const [username, password] = document.querySelectorAll('input')

const [login] = document.querySelectorAll('a')

const loading = document.querySelector('.loading')

login.addEventListener('click', (e)=>{

    
    const userObj = {
        username:username.value,
        password:password.value
    }

    const userDb = JSON.parse(sessionStorage.getItem('user'))
    /*user ou key ou key2 selon la machine. NB; dans SessionStoage, un objet appellé User 
    qui reprend les info de connexion de TOUT LES USERS. on verifie si l'entree de l'utilisateur correspond a une entrée de l objet user (iteration)*/
    

    let isUserFound = userDb.find(user=>user.username === userObj.username && user.password === userObj.password)

   // console.log(isUserFound)            //renvoie l'user sous forme dbjet JSON ( verifié)
    loading.innerText="Logging in ... please wait"

    setTimeout(()=>{

        if(isUserFound){
            loading.innerText="Welcome"
            loading.classList.remove('text-light')
            loading.classList.remove('text-danger')
            loading.classList.add('text-success')
            alert('welcome user '+ isUserFound.username)
        } else {
            loading.classList.remove('text-light')
            loading.classList.remove('text-success')
            loading.classList.add('text-danger')
            loading.innerText="User is not logged in"
            alert('combinaison incorrect')
            
        }
    }, 500)


    

})