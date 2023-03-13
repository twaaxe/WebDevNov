/*
use async to ccreata an asynchrnous function
use "await" IN the SCOPE of the function

*/


/*
async function keeper1(name){
    //await
    const getName = await name;
    return getName

}

keeper1("Cofffuyyezeze")
.then(function(data){
    return data
})
.then(data=>data.toUpperCase())
.then(data =>{ 
    data.split('');
    return data
})
.then(data=>{
    console.log(data)
})

*/



/*
async function printMessage(msg){
    let data = await msg;
    return data
}

printMessage("hello")
.then(x=>{
     let newValue = x+= "world"
     return newValue
    })
.then(w=> w.toUpperCase())
.then(c=>{
    console.log(c)
})
*/




/*
const PrintMsg = async msg => {
    try {
        let data = await msg
        // throw Error(); // forcing to print the error
        return data
    } catch (error){
        console.log(error, 'Something gone wrong')
    }
}

PrintMsg('zrdddd')
*/




