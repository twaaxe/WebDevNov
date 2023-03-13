//find parentElem

const listofTodo = document.querySelector('.list-group')

console.log(listofTodo)
console.log(listofTodo.children)

let i =0
while(listofTodo.children.length > 0){
    listofTodo.children[0].remove()
}




