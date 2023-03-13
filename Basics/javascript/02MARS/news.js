const InputUsername = document.getElementById('username');
const TextAreaComment = document.getElementById('comment');
const CommentList = document.getElementById('commentList');
const data_Id = document.getElementById('data_id');

function AddComment(){
    const obj={

    }
}

function deleteOne (){
    const ID = data_Id.value
    fetch (`http://localhost:3000/database/${data_Id.value}`, {
        method:'DELETE'
    })
    .then(()=>{
        console.log('Data is deleted')
    })
}

function updateOne(){
    const ID = data_Id.value
    const newComm = {
        username:"Reassurance",
        comment: "It will all become clear, give it some time"
    }
    fetch (`http://localhost:3000/database/${data_Id.value}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComm)
    })
    .then(res=>res.json())
    .then(updated=>console.log('Updated', updated))
}


function deleteAll (){
    fetch('http://localhost:3000/database')
    .then(res=>res.json)
    .then(data=>{
        data.forEach(comment => {
            fetch(`http://localhost:3000/database/${comment.id}`,{
                method: 'DELETE'
            })
            .then(()=>{
                console.log('Done deleting all posts')
            })
        });
    })
}