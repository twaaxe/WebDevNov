//local storage and method

const [_get, save, del, update] = document.querySelectorAll('button')

const [username, keyInput] = document.querySelectorAll('input')

const output = document.querySelector('.output')

//setItem method -> create data in localSpace

// localStorage.setItem('drink', 'coffee') //is not supposed to last

save.addEventListener('click',(e)=>{
    // console.log('hello')
    // console.log(keyInput.value, username.value)
    localStorage.setItem(keyInput.value, username.value)

    let obj ={
        "username": username.value
    }
    // console.log(JSON.stringify(obj))
    localStorage.setItem(keyInput.value, JSON.stringify(obj))
})



//getItem
_get.addEventListener('click', (e)=>{

    let StorageData = localStorage.getItem(keyInput.value)
    console.log(StorageData)
    if(StorageData == null){
        alert('NOT FOUND')
    }
    output.innerText = StorageData
})



del.addEventListener('click', (e)=>{

    const keyName = keyInput.value
    console.log(keyName)
    localStorage.removeItem(keyName)
})

/*

for (let x = 0; x < localStorage.length; x++) {
    //   console.log(x)
    let keyname = localStorage.key(x)
    // console.log(keyname)
    let value = localStorage.getItem(keyname)
    // console.log(`key:${keyname}\nvalue:${value}`)
}


*/

update.addEventListener('click', ()=>{
    const keyname = keyInput.value
    const newData = username.value

    const oldData = localStorage.getItem(keyname)
    console.log(oldData)

    const userObj = JSON.parse(oldData) //temp
    console.log(userObj.username)
    userObj.username = newData // data updated 
    console.log(userObj)


        // set storage key name with new object
    localStorage.setItem(keyname, JSON.stringify(userObj))

    console.log(JSON.parse(oldData))


})


/*
step1: getobject data
step2: convert string object data to real object (json.parse())
step3: update object with new value
step4: convert updatedobject to string again (json.stringify())
step5: overwrite the data now
*/





