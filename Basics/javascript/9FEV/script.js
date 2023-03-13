// Todolist Application exercise
// 1. Create a new todo list
// 2. Add a new todo item
// 3. Remove a todo item
// What is a todo list?
// A todo list is a list of tasks that need to be completed.
// What is a todo item?
// A todo item is a single task that needs to be completed.
// What you require to complete this exercise: 
// 1 . Required array, string and number methods and properties: 
// - push
// - splice
// - findIndex
// - toLowerCase
// - trim
// - length
// - includes
// - indexOf
// - slice

// Explain what you'll do in each step
// 1. Create a new todo list
// - Create a new array
// - Create a new object
// - Add the object to the array
// 2. Add a new todo item
// - Create a new object
// - Add the object to the array
// 3. Remove a todo item
// - Find the index of the object in the array
// - Remove the object from the array
// 4. Edit a todo item
// - Find the index of the object in the array
// - Update the object in the array
// 5. Delete a todo list
// - Find the index of the object in the array
// - Remove the object from the array
// 6. Display all todo lists
// - Loop through the array
// - Display the object
// 7. Display a todo list
// - Find the index of the object in the array
// - Display the object




// let toDo = [{
//     todo : 'javascript',
//     completed : false,
// }]

let arrayList=[]


function addToDo(todo){
    return arrayList.push(todo);
}

function removeTodo(todo){

    let indexToDo = arrayList.findIndex(function(singleToDo){
        return singleToDo.todo == todo;
    } )
    console.log(todo, indexToDo)
    // return arrayList.splice(indexToDo, todo)

}

function editTodo(todo, name, done){
    //find index in arrayLst
    let indexToDo = arrayList.findIndex(function(singleToDo){
        return singleToDo.todo == todo;
    } )

    if(name !== null){
        arrayList[indexToDo].todo=name;
    }

    if(done !== null){
        arrayList[indexToDo].completed=done;
    }

   console.log(arrayList[indexToDo])
    
}

function displayAllTodo(){
    arrayList.forEach(item => {
        console.log(`Title: ${item.todo} \nCompleted : ${item.completed}\n-------------------`)
    })
}


function displayTodo(isCompleted){
    let ListOfCompleted = arrayList.filter(item => item.completed == isCompleted)
    console.log(ListOfCompleted)
}

addToDo({
    todo : 'java',
     completed : true
})

addToDo({
    todo : 'css',
     completed : false
})


addToDo({
    todo : 'math',
     completed : true
})

addToDo({
    todo : 'algebra',
     completed : true
})

addToDo({
    todo : 'javascript',
     completed : false
})


//removeTodo("css")
editTodo("math", null, false)
console.log(arrayList)

displayAllTodo()

displayTodo(false)

