console.group(sessionStorage)
console.group(typeof sessionStorage)

//methods


//create new storage data
sessionStorage.setItem('secret_key', 'hello world')

sessionStorage.setItem('secret_key', 123456)

sessionStorage.setItem('secret_key', true)

sessionStorage.setItem('secret_key', undefined)

// sessionStorage.setItem('secret_key', 'Axel')

sessionStorage.setItem('yooooo', 'hello world')

sessionStorage.setItem('coffee', [1,2,3,4,5]) //object, will be saved
sessionStorage.setItem('coffaa', '[1,2,3,4,5]') //real array, will NOT be saved

// sessionStorage.setItem('user1',{id:1}) 
sessionStorage.setItem('user1', '[{"id" : 1}]') //best way as it return the value and type, the one above return an obect

let result;

result = sessionStorage.getItem('secret_key')

result = sessionStorage.getItem('coffee')

result = sessionStorage.getItem('user1')

console.log( result, typeof result, JSON.parse(result) )





