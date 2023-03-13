let promiseUser1 = new Promise((resolve,reject)=>{
    resolve([1,2,3])
})

let promiseUser2 = new Promise((resolve,reject)=>{
    resolve([4,5,6])
})

let promiseUser3 = new Promise((resolve,reject)=>{
    resolve([7,8,9])
})

let promiseUser4 = new Promise((resolve,reject)=>{
    resolve([10,11,12])
})

let getResult = Promise.all([promiseUser1, promiseUser2, promiseUser3, promiseUser4])

getResult.then(allData=>{
    // console.log(allData.flat())
})

/*------------------------------------------------------------------------------------------------------------*/

/*
on a 3 sites. On fait 3 Promise --> on veut recuperer les dnnées du site dans 1 SEUL array
-->
Promise.all(ARRAY DE PROMISE)
.then(DataFrom3Site => ({
    code
}))

*/



let promiseazerty = new Promise((resolve,reject)=>{
    return "hello world";
})

// console.log(promiseazerty)



/*------------------------------------------------------------------------------------------------------------*/

let site = "abc.com"


//get all the data from he website
function getDataFromSite(site){
    return new Promise((resolve,reject)=>{

        //checking if we can gte the data
        if(site !== null && site !==undefined){
            resolve(site)
        }
        else {
            reject(`${site} is not aviable.`)
        }
    })
}



getDataFromSite(site)   //actually get the data
.then(news => {         //actually display them
    console.log(news)
})
.catch(err=>console.log(err))   //if error display the error message
.finally(()=>{console.log("Done")})








