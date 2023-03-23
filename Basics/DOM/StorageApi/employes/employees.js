/*
 FIRST get button
1 getData from LocalStorage
2 get property-value for each Data
3 create a table in JSON with the info
4 append the last creation 
*/


//button save and close to add user
const [closeAddEmploye, saveAddEmploye] = document.querySelectorAll(' #addEmployee > .modal-dialog > .modal-content > .modal-footer > button')
/*console.log(saveAddEmploye)
console.log(closeAddEmploye)*/

const searchEmploye = document.querySelector('.searchButton')
// console.log(searchEmploye)

const getLocalStorageUser = ()=>JSON.parse(localStorage.getItem('user'))

document.addEventListener('DOMContentLoaded',()=>{
    
    let users = getLocalStorageUser()
    console.log(users) //null when LocalStorageData is empty
    if(users == null){
        localStorage.setItem('user', '[]')
        alert("eeee")
    }

})


saveAddEmploye.addEventListener('click', function(){

    /*
    get evrey info of the html form
    create HTML cells with dynamic info
    append it
    */
    const fullname = document.querySelector('#inputEmail4').value
    const profession= document.querySelector('#inputPassword4').value
    const gender= document.querySelector('#inputState')
    const genderResp = gender.options[gender.selectedIndex].text
    const nationality= document.querySelector('#inputAddress2').value
    const address= document.querySelector('#inputAddress2').value
    const city = document.querySelector('#inputCity').value
    const phone= document.querySelector('#thePhone').value
    const email= document.querySelector('#inputZip').value

    const empy=""
    if(fullname && profession && genderResp && nationality && address && city && phone && email !==empy){

        alert("not empty")
    } else {
        alert("please fill up every blank field")
    }
    

    let tempUsers = getLocalStorageUser();
    
    const newOne = {
        "fullname":fullname,
        "profession":profession,
        "gender":genderResp,
        "nationality":nationality,
        "address":address,
        "phone":phone,
        "email":email
    }

    tempUsers.push(newOne)
    localStorage.setItem('user', JSON.stringify(tempUsers)) 
    alert(newOne)
    alert(tempUsers)

})


/*

{
    id:
    fullname:
    profession:
    gender:
    nationality:
    address:
    phone:
    email:
}

*/

