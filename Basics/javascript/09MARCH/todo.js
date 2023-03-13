const DeleteItem = document.querySelector('.delete-item');

// console.log(DeleteItem.parentElement.parentElement)
// console.log(DeleteItem.parentElement.parentElement.parentElement)

// document.body.remove() remove the<body> tag, so the all webPage
// DeleteItem.remove()


const ListOfTodos = document.querySelector('.list-group');

/*
    idea on how to CLEAR the list
while(ListOfTodos.children.length>0){
    ListOfTodos.children[0].remove()
}
*/

// console.log(ListOfTodos.firstElementChild)
// console.log(ListOfTodos.lastElementChild)

// ListOfTodos.firstElementChild.remove()

const addTodo1 = document.querySelector('.btn.btn-danger')


const [addTodo,deleteAllTodos] = document.querySelectorAll('button')
const zazazaza = document.querySelectorAll('button')
//those 2 are the same


const FirstForm = document.querySelector('.card-body > #todo-form')
const TodoItem = document.querySelector(".list-group-item")

//CLONE OF LIST GROUP
const cloneOfTodoItem1 = TodoItem.cloneNode(true)
const cloneOfTodoItem2 = TodoItem.cloneNode(true)
console.log(cloneOfTodoItem1.hasChildNodes()) //return true if it has children

//ADD THE CLONE
console.log(cloneOfTodoItem1.childNodes)
console.log(cloneOfTodoItem1.childNodes[0])
ListOfTodos.appendChild(cloneOfTodoItem1)
ListOfTodos.appendChild(cloneOfTodoItem2)


let parser = new DOMParser();  //parsing from String to NodeObject
let RealNodeObject = parser.parseFromString(`
<li class="list-group-item d-flex justify-content-between">
                            Todo js
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>
                        </li>
`)

/*
RealNodeObject =document.createRange().createContextualFragment('
<li class="list-group-item d-flex justify-content-between">
                            Todo js
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>
                        </li>
')
*/

// console.log(RealNodeObject) ---> return a hml doc(header body and footer). it now contain the <li> we parsed
console.log(RealNodeObject.body.firstChild) //it's obvious


//append
ListOfTodos.append(RealNodeObject.body.firstChild, parser)

//style
ListOfTodos.lastElementChild.getElementsByClassName.background = "red";
ListOfTodos.firstElementChild.getElementsByClassName.background = "red";


// font size
ListOfTodos.lastElementChild.style.fontSize
="3em"
console.log(ListOfTodos.lastElementChild.style)



ListOfTodos.childNodes[ListOfTodos.childNodes.length-2].style.backgroundColor="cyan";

console.log(ListOfTodos.childNodes.length-2)

// background-color: salmon; color:white;font-size: 3em;
ListOfTodos.childNodes[ListOfTodos.childNodes.length-3].setAttribute('style','background-color: salmon; color:white;font-size: 3em;')

console.log(ListOfTodos.lastElementChild)

// usage: setTimeout(callback,ms_time)
// 1 second is 1000 miliseconds
// setTimeout(function(){

// })
// setTimeout(()=>{
//     console.log('hello world')
//    // ListOfTodos.firstChild.remove()
//     ListOfTodos.lastElementChild.remove();
//    // ListOfTodos.lastChild.remove()
// },5000)


// usage: setInterval(callback,ms_time)
const RemoveOneByOne = setInterval(()=>{
    console.log('this is interval')
    if(ListOfTodos.children.length>0){
        ListOfTodos.firstChild.remove()
    }else{
        // stop interval
        clearInterval(RemoveOneByOne)
    }
    
},2000)