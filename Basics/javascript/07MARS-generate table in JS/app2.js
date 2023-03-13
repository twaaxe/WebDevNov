const ParentElement = document.querySelector('.container');

// element generator
const g = tagName => document.createElement(tagName);

// textNode generator
const t = content => document.createTextNode(content);

// table,thead,tbody
const table = g('table');
const thead = g('thead');
const tbody = g('tbody');

// thead TR
const thead_tr = g('tr');

// th
const th1 = g('th');
th1.appendChild(t('#')) // text inserted

const th2 = g('th');
th2.appendChild(t('username')) // text inserted

const th3 = g('th');
th3.appendChild(t('password')) // text inserted


//APPEND 2 ways

// Append 3 th into tr 
// thead_tr.appendChild(th1)
// thead_tr.appendChild(th2)
// thead_tr.appendChild(th3)
const th_Elements = [th1,th2,th3]
th_Elements.forEach(th=>thead_tr.appendChild(th))   //=> same as above but shorter

thead.appendChild(thead_tr) //append tr into thead

table.appendChild(thead)

// tbody
const tbody_tr = g('tr');


//td 
const td1 = g('td')
td1.appendChild(t('1')) // add the lettet 1 while appending

const td2 = g('td')
td2.appendChild(t('root')) // add 'root' into td2 while appending

const td3 = g('td')
td3.appendChild(t('toor123'))

const tdElement = [td1, td2, td3]
tdElement.forEach(td => tbody_tr.appendChild(td)) //append the TD in tbody


//append tr into tbody
tbody.appendChild(tbody_tr)

//append tbody into table
table.appendChild(tbody)

//append table into container
ParentElement.appendChild(table)



 //https://github.com/atiilla/WebDevNov2022/blob/main/Basics/javascript/DOM/exercises/tablev0.1.js