// Exercises combine string and array methods
// to solve puzzles.

let letters = "abcdefghijklmnopqrstuvwxyz";

// .fromCharAt()
function ConvertLettersToUtf16(str){ // 
    // convert str data to arraylist
    let arr = str.split("") // string method
    const encoded= []
    // loop the array forEach() // array method
    arr.forEach(function(letter){
        encoded.push(letter.charCodeAt())
    })
    return encoded
}


// console.log(ConvertLettersToUtf16(letters));

let msg = [
    70, 111, 108, 108, 111, 119,
    32, 116, 104, 101,  32, 119,
   104, 105, 116, 101,  32, 114,
    97,  98,  98, 105, 116,  46
 ]

function DecodeUtf16Chars(arr){
    // arraylist
    let message = ""
    // let result = String.fromCharCode(arr)
    arr.forEach(function(letter){
        // console.log(String.fromCharCode(letter))
        message+=String.fromCharCode(letter)

    })
    return message;
}

/*
let str = "atilla"
a
t
i
l
l
a


*/

console.log(DecodeUtf16Chars(msg))

// string methods exercises

// 1. write a function that changes letters to utf-16


// 2. write a function that converts utf-16 to letters


let students =[];

/*
full_name:"John Doe"
age: 20
email: "johndoe@microsoft.com"
phone: "123-456-7890
address: "123 Main St.
*/

// 3. write a function that adds a student to the students array and displays the students array
function AddStudent(obj){
    students.push(obj)
    return students;
}

// let student1 = AddStudent({
//     id:1,
//     name:"Michael Jackson",
//     email:"michael@microsoft.com"
// })
// let student1= AddStudent('Michael')
// let student2 = AddStudent('Michael1')

// console.log(student1)


// 4. write a function that encode a string to base64
// what is base64? and what method do you use to encode a string to base64 in javascript?
// https://developer.mozilla.org/en-US/docs/Web/API/atob => Read this
// https://www.base64encode.org/
// decrypt: atob
// encrypt: btoa

// function EncryptString(str){
//     let encoded = btoa(str)
//     console.log(encoded)
// }

// function DecryptString(encoded){
//     let decoded = atob(encoded);
//     console.log(decoded)
// }

// const base64Tool = {
//     Encrypt:function(str){
//         let encoded = btoa(str)
//         console.log(encoded)
//     },
//     Decrypt:function(encoded){
//         let decoded = atob(encoded);
//         console.log(decoded)
//     }
// }

// EncryptString("Knock knock!")
// DecryptString("SGVsbG8gSmF2YXNjcmlwdCE=")
// base64Tool.Encrypt("Hello Javascript!!!!")
// base64Tool.Decrypt("SGVsbG8gSmF2YXNjcmlwdCEhISE=")

// Solve the puzzles and submit your code to github or codepen


let names = "john, peter, mary, susan, john, mary";

// 5. 3 functions that convert a string to an array, sort the array and display the array in the <ul id="result"></ul> element when the button is clicked
// DisplayArray(SortArray(ConvertStringToArray(names)))

function ConvertStringToArray(str){
    let arr = str.split(",");
    let names = []
    arr.forEach(function(name){
        names.push(name.trim())
    })
    return names
}

function SortArray(data){
    return data.sort()
}

const output = document.getElementById('result')
function DisplayArray(data){
    output.innerHTML=""
    data.forEach(function(name){
        output.innerHTML+=`<li>${name}</li>`
    })
}

// console.log(DisplayArray(SortArray(ConvertStringToArray(names))))

function ClickHandler(){
    DisplayArray(SortArray(ConvertStringToArray(names)))
}