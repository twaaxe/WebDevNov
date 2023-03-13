//find li element
const liItem = document.querySelectorAll('.list-group-item:nth-child(even)');
const listContainer = document.querySelector('.list-group');
const teaElement = document.querySelector('.tea')


/*
console.log(typeof liItem)
console.log(liItem)
console.log(liItem.className)
console.log(liItem[0])
console.log(liItem[0].innerHTML)
liItem[2].innerHTML += "udiug";
console.log(liItem[2].innerHTML)
*/



//  ADD CLASS TO ITEM WITH .CLASSLIST

liItem.forEach(li =>{
    console.log(li)
    li.classList.remove('bg-success')
    li.classList.add('bg-dark')
    li.classList.add('text-light')
    console.log(li.classList.contains('bg-dark'))
})


const liElement = document.createElement('li');
liElement.setAttribute('class',"list-group-item")// this methood needs 2 ags; the type and what to add
liElement.innerText = "this is a new li element"
liElement.classList.add('bg-danger')
liElement.classList.add('text-light')

console.log(liElement, "this is a new li")
listContainer.appendChild(liElement)




//function add something
const func = parametre => document.createElement(parametre);


//call back of FUNC to create  new li
const newTask = func('li')

//add the class and the content
newTask.classList.add('list-group-item')
newTask.innerText = "this is an oher li hahaha"

//fix the new element to a DIV, CONTAINER ETC
listContainer.appendChild(newTask)
console.log(newTask, 'new li')

//prevous sibling
teaElement.previousElementSibling.innerText = "this is a sibling of tea element"
teaElement.previousElementSibling.previousElementSibling.innerText = "this is a sibling of tea element AGAIN"







