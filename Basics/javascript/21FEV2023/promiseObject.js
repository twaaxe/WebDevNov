let promiseMe = username =>{

    //aim to verify the data
    return new Promise ((resolve, reject)=>{
        if (username.includes(0)){
            reject('Number can not be included')
        } else {
            resolve(username)
        }
    })
}

promiseMe('Admin0')
.then(data =>{
    console.log(data)
})
.catch(e=>console.log(e))