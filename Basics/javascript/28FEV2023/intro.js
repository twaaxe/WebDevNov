/*
Fake backend in local computer
COMMAND > json-server data.json --watch
--watch -> hot reload
API => Application Interface
*/

// HTTP - GET request
// fetch('http://localhost:3000/database')
// .then(res=>res.json())
// // .json() > method that can convert data into json(javascript object notation) data type
// .then(jsondata=>{
//     console.log(jsondata)
// })

// read a txt file
// fetch('readme.txt')
// .then(response=>response.json())
// .then(data=>{
//     console.log(data)
// })

// fetch('data.json')
// .then(res=>res.json())
// .then(data=>{
//     console.log(data)
// })

// GET request for single object
// /database/3 
// fetch('http://localhost:3000/database/1')
// .then(res=>res.json())
// .then(data=>{
//     console.log(data,'url param')
// })
// url param dns.com/blog/34
// url query dns.com/blog?title

// fetch('http://localhost:3000/database/?title=Javascript')
// .then(res=>res.json())
// .then(data=>{
//     console.log(data,'url query')
// })

// Use fetch in async function

async function GetData(id) {
    let response = await fetch('http://localhost:3000/database/' + id)
    let data = response.json();
    return data
}


const DataID = document.getElementById('data_id')
const Output = document.getElementById('output')

function ClickHandler() {
    // Output.innerHTML="asidjaisjdiasjdioasdjioadjioa"
    GetData(DataID.value)
        .then(mydata => {
            Output.innerHTML = `<li>Title:${mydata.title}<br/>Body:${mydata.body}</li>`

        })
}

const newData = {
    title: "Python",
    body: "Python is easy language"
}


function AddDataHandler() {
    fetch('http://localhost:3000/database', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(newData)
    })
        .then(data => {
            console.log(data, 'Saved')
        })
}


function DeleteHandler() {
    console.log('testing delete')
    // DELETE Request
    fetch('http://localhost:3000/database/' + DataID.value, {
        method: 'DELETE'
    })
        .then(() => {
            console.log('deleted')
        })
}

const newObjectData={
    title:'GoLang',
    body:'This js is sooo cool'
}

// UPDATE
function UpdateHandler(){
    fetch('http://localhost:3000/database/6',{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json; charset=utf-8'
            // sets content type that what data are you sending to machine
        },
        // new json data will be stored in body prop's value as string data type
        body:JSON.stringify(newObjectData) // always as string
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data,'UPDATED')
    })
} 