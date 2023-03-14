const todoInput = document.querySelector("#todo")
const addTodoInput = document.querySelector(".btn-danger")
const listGroup = document.querySelector("ul.list-group")
const deleteAllButton = document.querySelector("#clear-todos")

//click event
addTodoInput.addEventListener('click', function (e) {
    e.preventDefault()
    console.log("you just cliked!")

    addTodo()

    /*
    const newTodo = todoInput.value;
    const single_todo= `<li class="list-group-item d-flex justify-content-between">
    ${newTodo}
    <a href = "#" class ="delete-item">
        <i class = "fa fa-remove"></i>
    </a>
</li>`;
    //we now have ou html <li> as a STRING
    //we need to parse it to a node object before appending it
    console.log(single_todo)
    const single_todoParsed = document.createRange().createContextualFragment(single_todo)
    listGroup.appendChild(single_todoParsed)
    */

})

function addTodo(input) {

    const newTodo = todoInput.value;
    const single_todo = `<li class="list-group-item d-flex justify-content-between">
    ${newTodo}
    <a href = "#" class ="delete-item">
        <i class = "fa fa-remove"></i>
    </a>
</li>`;
    const single_todoParsed = document.createRange().createContextualFragment(single_todo)
    listGroup.appendChild(single_todoParsed)
}

//work perfect
function deleteList(){
    const theList = listGroup.children;
    Array.from(theList).forEach(todo=>{
        console.log(todo)
        todo.remove()
    })
}


//work perfect
function deleteLastItem(){
    const theList = listGroup.children;
    const aze = Array.from(theList)
    listGroup.removeChild(listGroup.lastChild);


}


    //DOES NOT WORK
function deletOnyByOne(){
    setInterval(deleteLastItem(),1000)
}

deleteAllButton.addEventListener('click', function () {
    deleteLastItem() 

    // listGroup.forEach(x => {
    //     console.log("azazaz")
    //     setInterval(x.removeChild(listGroup.lastElementChild),1000)
    // })


})


//input event (change)
todoInput.addEventListener('change', function () {
    console.log("hello dude!")
})


//keyDownEvent
todoInput.addEventListener('keydown', function (e) {
    if (e.key === '0') {
        console.log("You pressed Enter")

        listGroup.style.display == "none"
    }
})


/*

<li class="list-group-item d-flex justify-content-between">
                            ${newTodo}
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>
                        </li>

*/


