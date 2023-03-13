const newElement = t => {
    return document.createElement(t)
    
}

//recup du conatiner
const mainContainer = document.querySelector('.container');

//cree la table
const table = newElement('table')
table.className = "table table-striped"

//creer tHead, on y metttra les th et les tr
const thead = newElement('thead')
const trofThead = newElement('tr')
const dataThead1 = newElement('th')
const dataThead2 = newElement('th')
const dataThead3 = newElement('th')

//on y met les th et les tr
trofThead.appendChild(dataThead1)
trofThead.appendChild(dataThead2)
trofThead.appendChild(dataThead3)

thead.appendChild(trofThead)

table.appendChild(thead)

mainContainer.appendChild(table)

//THEAD PART IS DONE


//TBODY
//create the element
const trofTbody = newElement('tr')
const tdofTbody1 = newElement('td')
const tdofTbody2 = newElement('td')
const tdofTbody3 = newElement('td')

//append the element


//https://github.com/atiilla/WebDevNov2022/blob/main/Basics/javascript/DOM/exercises/table.js