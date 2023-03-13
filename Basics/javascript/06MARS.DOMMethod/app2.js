const ParentContainer = document.querySelector('.container')    //create the container ul and li boxes
const g = t => document.createElement(t)    //function to create an element
const ULContainer = g('ul') //we used the function to ceate a Unorderedlist item
ULContainer.className = 'list-group list-group-flush'    //we add the Class for CSS


const lisItem = g('li') // create an list elemen
lisItem.className = "list-group-item"
lisItem.innerText = 'zhbf hbcs z hziyz zidz z z NUMERO1'


ULContainer.appendChild(lisItem)    //send it to the container
ParentContainer.appendChild(ULContainer)



function LiIteGenerator(content) {      //generate dynamic content
    const LiItem =g('li') //create LI
    LiItem.className = 'list-group-item'
    LiItem.innerText = content
    return LiItem
}

for(let i =0; i<10;i++){
    const item = LiIteGenerator(`Item-${i} example`)
    ULContainer.appendChild(item)
}
