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
        alert('not found')
    }
    output.innerText = StorageData
})










